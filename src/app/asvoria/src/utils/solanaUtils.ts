import { Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMintInstruction,
  createMintToInstruction,
  createSetAuthorityInstruction,
  getAssociatedTokenAddressSync,
  AuthorityType,
  ExtensionType,
  getMintLen,
  TOKEN_2022_PROGRAM_ID,
  createInitializeTransferFeeConfigInstruction
} from '@solana/spl-token'

// import { PROGRAM_ID, createCreateMetadataAccountV3Instruction } from '@metaplex-foundation/mpl-token-metadata'
import { useCallback, useState } from 'react'
import { PinataMetadataType } from '../views/create-token-form'
import { toast } from 'react-toastify'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplTokenMetadata, createV1, TokenStandard } from '@metaplex-foundation/mpl-token-metadata'

import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import {
  SPL_TOKEN_PROGRAM_ID,
  createMintWithAssociatedToken,
  getMintSize,
  mplToolbox,
  setAuthority,
  AuthorityType as AuthType
} from '@metaplex-foundation/mpl-toolbox'
import { generateSigner, percentAmount, publicKey, sol, some, transactionBuilder } from '@metaplex-foundation/umi'
import { toWeb3JsInstruction } from '@metaplex-foundation/umi-web3js-adapters'

type FormValues = {
  tokenName: string
  symbol: string
  totalSupply: string
  decimals: string
  desc: string
  website: string
  telegram: string
  twitter: string
  discord: string
  mintAuthTxt: string
  freezeAuthTxt: string
  updateAuthTxt: string
}

type FormValues2022 = {
  tokenName: string
  symbol: string
  totalSupply: string
  decimals: string
  desc: string
  website: string
  telegram: string
  twitter: string
  discord: string
  mintAuthTxt: string
  freezeAuthTxt: string
  updateAuthTxt: string
  transferFeePercent: string
  maxTransferFee: string
}

export const useCreateTokenHook = () => {
  const { connection } = useConnection()
  const wallet = useWallet()
  const [tokenMintAddress, setTokenMintAddress] = useState('')
  const solanaEndpoint = process.env.NEXT_PUBLIC_SOLANA_ENDPOINT ? process.env.NEXT_PUBLIC_SOLANA_ENDPOINT : ''
  const umi = createUmi(solanaEndpoint).use(mplTokenMetadata()).use(walletAdapterIdentity(wallet)).use(mplToolbox())

  const uploadMetadata = async (data: PinataMetadataType) => {
    const api_uri = process.env.NEXT_PUBLIC_PINATA_URI + '/pinJSONToIPFS'

    const res = await fetch(api_uri, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).catch(e => {
      throw new TypeError('Metadata can not be upload at this time')
    })

    const result = await res.json()

    return `https://nftstorage.link/ipfs/${result.IpfsHash}`
  }
  const uploadLogo = async (file: File) => {
    const api_uri = process.env.NEXT_PUBLIC_PINATA_URI + '/pinFileToIPFS'
    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch(api_uri, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_KEY}`
      },
      method: 'POST',
      body: formData
    })

    const result = await res.json()

    if (result.IpfsHash === undefined) {
      throw new TypeError('Image can not upload at this time')
    }

    return `https://nftstorage.link/ipfs/${result.IpfsHash}`
  }

  const createToken = useCallback(
    async (data: FormValues, tokenUri: string) => {
      if (!wallet.publicKey) {
        throw new TypeError('Wallet not connected')
      }

      const mintAuthority =
        data.mintAuthTxt !== '' ? publicKey(data.mintAuthTxt) : publicKey(wallet.publicKey.toString())
      const freezeAuthority = data.freezeAuthTxt !== '' ? publicKey(data.freezeAuthTxt) : null
      const updateAuthority = data.updateAuthTxt !== '' ? publicKey(data.updateAuthTxt) : null

      const lamports = await umi.rpc.getRent(getMintSize())
      const mintKeypair = generateSigner(umi)
      const totalSupply = BigInt(Number(data.totalSupply) * Math.pow(10, Number(data.decimals)))

      const createMintwithATA = createMintWithAssociatedToken(umi, {
        mint: mintKeypair,
        owner: publicKey(wallet.publicKey.toString()),
        amount: totalSupply,
        decimals: Number(data.decimals),
        mintAuthority: mintAuthority,
        freezeAuthority: freezeAuthority
      })

      const createMetadata = createV1(umi, {
        mint: mintKeypair,
        authority: umi.identity,
        name: data.tokenName,
        symbol: data.symbol,
        uri: tokenUri,
        sellerFeeBasisPoints: percentAmount(0),
        splTokenProgram: SPL_TOKEN_PROGRAM_ID,
        tokenStandard: TokenStandard.Fungible
      })

      const setAuthorityInstruction = setAuthority(umi, {
        owned: mintKeypair.publicKey,
        owner: publicKey(wallet.publicKey.toString()),
        authorityType: AuthType.MintTokens,
        newAuthority: updateAuthority
      })

      const builder = transactionBuilder().add(createMintwithATA).add(createMetadata).add(setAuthorityInstruction)

      await builder.sendAndConfirm(umi)

      console.log(mintKeypair.publicKey.toString())
      setTokenMintAddress(mintKeypair.publicKey.toString())
      toast.success('Token creation successful')
    },
    [wallet.publicKey, connection, wallet.sendTransaction, umi]
  )

  const createToken2022 = useCallback(
    async (data: FormValues2022, tokenUri: string) => {
      if (!wallet.publicKey) {
        throw new TypeError('Wallet not connected')
      }
      const mintKeypair = Keypair.generate()

      const mintAuthority = data.mintAuthTxt !== '' ? new PublicKey(data.mintAuthTxt) : wallet.publicKey
      const freezeAuthority = data.freezeAuthTxt !== '' ? new PublicKey(data.freezeAuthTxt) : null
      const updateAuthority = data.updateAuthTxt !== '' ? new PublicKey(data.updateAuthTxt) : null
      const transferFeeConfigAuthority = wallet.publicKey
      const withdrawWithheldAuthority = wallet.publicKey

      const extensions = [ExtensionType.TransferFeeConfig]

      const mintLen = getMintLen(extensions)

      const feeBasisPoints = Number(data.transferFeePercent) * 100
      const maxFee = BigInt(Number(data.maxTransferFee) * Math.pow(10, Number(data.decimals)))

      const lamports = await connection.getMinimumBalanceForRentExemption(mintLen)

      const totalSupply = BigInt(Number(data.totalSupply) * Math.pow(10, Number(data.decimals)))

      const createAccountInstruction = SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: mintLen,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID
      })

      const initializeTransferFeeConfigInstruction = createInitializeTransferFeeConfigInstruction(
        mintKeypair.publicKey,
        transferFeeConfigAuthority,
        withdrawWithheldAuthority,
        feeBasisPoints,
        maxFee
      )

      const initializeMintInstruction = createInitializeMintInstruction(
        mintKeypair.publicKey,
        Number(data.decimals),
        mintAuthority,
        freezeAuthority,
        TOKEN_2022_PROGRAM_ID
      )

      const tokenATA = await getAssociatedTokenAddressSync(
        mintKeypair.publicKey,
        wallet.publicKey,
        true,
        TOKEN_2022_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      )

      const createATA = createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        tokenATA,
        wallet.publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      )

      const mintToA = createMintToInstruction(
        mintKeypair.publicKey,
        tokenATA,
        wallet.publicKey,
        totalSupply,
        undefined,
        TOKEN_2022_PROGRAM_ID
      )

      const createMetadataUmi = createV1(umi, {
        mint: publicKey(mintKeypair.publicKey.toString()),
        authority: umi.identity,
        name: data.tokenName,
        uri: tokenUri,
        sellerFeeBasisPoints: percentAmount(0),
        splTokenProgram: publicKey(TOKEN_2022_PROGRAM_ID.toString()),
        tokenStandard: TokenStandard.Fungible
      })

      const createMetadataUmiInstructions = createMetadataUmi.getInstructions()

      const createMetadataInstruction = toWeb3JsInstruction(createMetadataUmiInstructions[0])
      const setAuthorityInstruction = createSetAuthorityInstruction(
        mintKeypair.publicKey,
        wallet.publicKey,
        AuthorityType.MintTokens,
        updateAuthority,
        undefined,
        TOKEN_2022_PROGRAM_ID
      )

      const tx = new Transaction().add(
        createAccountInstruction,
        initializeTransferFeeConfigInstruction,
        initializeMintInstruction,
        createATA,
        mintToA,
        createMetadataInstruction,
        setAuthorityInstruction
      )

      await wallet.sendTransaction(tx, connection, {
        signers: [mintKeypair]
      })

      console.log(mintKeypair.publicKey.toString())
      setTokenMintAddress(mintKeypair.publicKey.toString())
      toast.success('Token creation successful')
    },
    [wallet.publicKey, connection, wallet.sendTransaction, umi]
  )

  return { uploadMetadata, createToken, createToken2022, uploadLogo, tokenMintAddress, setTokenMintAddress }
}

// validation utils

export const validateSolAddress = (address: string) => {
  try {
    const pubkey = new PublicKey(address)
    const isSolana = PublicKey.isOnCurve(pubkey.toBuffer())
    return isSolana
  } catch (error) {
    return false
  }
}

export const validateNumber = (field: string) => {
  const regexp = /^\d+(\.\d{1,18})?$/
  return regexp.test(field)
}

export const validateNumberAndPercentage = (field: string) => {
  const regexp = /^\d+(\.\d{1,18})?$/
  let res = false
  if (regexp.test(field)) {
    res = Number(field) > 0 && Number(field) < 100
  }
  return res
}
