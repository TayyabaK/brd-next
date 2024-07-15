'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'

// Components Imports
import CustomTextField from '../../../../../@core/components/mui/TextField'
import FileUploader from '../../components/upload-file'
import { Typography } from '@mui/material'
import CustomButton from '../../components/CustomBtn'
import CustomCheckBox from '../../components/CustomCheckbox'
import { useCreateTokenHook } from '../../utils/solanaUtils'
import { useWallet } from '@solana/wallet-adapter-react'
import TransferFeeFields from '../../components/TransferFeeFields'

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

export type PinataMetadataType = {
  pinataMetadata: {
    name: string
  }
  pinataContent: {
    name: string
    symbol: string
    description: string
    image: string
    creator: {
      name: string
      site: string
    }
    extensions: {
      telegram: string
      twitter: string
      website: string
      discord: string
    }
  }
}

const CreateSplTokenForm = () => {
  const { publicKey } = useWallet()
  const [files, setFiles] = useState<File[]>([])
  const { createToken2022, uploadLogo, uploadMetadata, tokenMintAddress, setTokenMintAddress } = useCreateTokenHook()
  const [loading, setLoading] = useState<boolean>(false)
  const [stage, setStage] = useState<string>('Submit')
  console.log(tokenMintAddress)
  // Hooks
  const {
    control,
    register,
    reset,
    resetField,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues2022>({
    defaultValues: {
      tokenName: '',
      symbol: '',
      totalSupply: '',
      decimals: '',
      desc: '',
      website: '',
      telegram: '',
      twitter: '',
      discord: '',
      mintAuthTxt: '',
      freezeAuthTxt: '',
      updateAuthTxt: '',
      transferFeePercent: '',
      maxTransferFee: ''
    }
  })

  const onSubmit = async (d: FormValues2022) => {
    if (!publicKey) {
      toast.error('Wallet not connected')
      return
    }
    try {
      setLoading(true)
      let imageUri = ''
      if (files.length > 0) {
        setStage('Uploading Image')
        imageUri = await uploadLogo(files[0])
      }
      const tokenMetadata: PinataMetadataType = {
        pinataMetadata: {
          name: `${d.tokenName.toLowerCase()}.json`
        },
        pinataContent: {
          name: d.tokenName,
          symbol: d.symbol,
          description: d.desc,
          image: imageUri,
          creator: {
            name: 'Asvoria Launchpad',
            site: 'asvoria.io'
          },
          extensions: {
            telegram: d.telegram,
            twitter: d.twitter,
            website: d.website,
            discord: d.discord
          }
        }
      }
      setStage('Uploading Metadata')
      const tokenUri = await uploadMetadata(tokenMetadata)
      // const tokenUri = ''
      setStage('Creating Token')
      await createToken2022(d, tokenUri)
      console.log(tokenMintAddress)
      reset()
      setFiles([])
      setStage('Submit')
      setLoading(false)
    } catch (e: any) {
      toast.error(e.message)
      console.log(e)
      setStage('Submit')
      setLoading(false)
    }
  }

  return (
    <>
      {tokenMintAddress === '' && (
        <Card sx={{ bgcolor: '#000' }}>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name='tokenName'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        fullWidth
                        label='Name *'
                        placeholder=''
                        {...(errors.tokenName && { error: true, helperText: 'This field is required.' })}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name='symbol'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        fullWidth
                        label='Symbol *'
                        placeholder=''
                        {...(errors.symbol && { error: true, helperText: 'This field is required.' })}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name='totalSupply'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        fullWidth
                        type='text'
                        label='Total Supply *'
                        placeholder=''
                        {...(errors.totalSupply && { error: true, helperText: 'This field is required.' })}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name='decimals'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        fullWidth
                        type='text'
                        label='Decimals *'
                        placeholder=''
                        {...(errors.decimals && { error: true, helperText: 'This field is required.' })}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name='website'
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <CustomTextField {...field} fullWidth type='text' label='Website' placeholder='' />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name='telegram'
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <CustomTextField {...field} fullWidth type='text' label='Telegram' placeholder='' />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name='twitter'
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <CustomTextField {...field} fullWidth type='text' label='Twitter' placeholder='' />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name='discord'
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <CustomTextField {...field} fullWidth type='text' label='Discord' placeholder='' />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name='desc'
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                      <CustomTextField
                        {...field}
                        rows={4}
                        fullWidth
                        multiline
                        label='Description'
                        {...(errors.desc && { error: true, helperText: 'This field is required.' })}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Image</Typography>
                  <div className='border p-8 rounded'>
                    <FileUploader files={files} setFiles={setFiles} />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <TransferFeeFields
                    controlName1='transferFeePercent'
                    controlName2='maxTransferFee'
                    control={control}
                    errors={errors}
                    register={register}
                    resetField={resetField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomCheckBox
                    label='Mint Authority (Not Recommended)'
                    name='mintAuthority'
                    controlName='mintAuthTxt'
                    control={control}
                    errors={errors}
                    register={register}
                    resetField={resetField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomCheckBox
                    label='Freeze Authority (Not Recommended)'
                    name='freezeAuthority'
                    controlName='freezeAuthTxt'
                    control={control}
                    errors={errors}
                    register={register}
                    resetField={resetField}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomCheckBox
                    label='Update Authority'
                    name='updateAuthority'
                    controlName='updateAuthTxt'
                    control={control}
                    errors={errors}
                    register={register}
                    resetField={resetField}
                  />
                </Grid>

                <Grid item xs={12} className='flex gap-4 mt-5'>
                  <CustomButton disabled={loading} type='submit'>
                    {loading && <CircularProgress size={20} />}&nbsp; {stage}
                  </CustomButton>
                  <Button
                    disabled={loading}
                    variant='tonal'
                    color='secondary'
                    type='reset'
                    onClick={() => {
                      reset()
                      setFiles([])
                    }}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      )}
      {tokenMintAddress !== '' && (
        <Card>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography textAlign={'center'}>Your token has been created successfully</Typography>
                <Typography textAlign={'center'} color='#2bffff'>
                  <a href={`https://explorer.solana.com/address/${tokenMintAddress}`} target='_blank'>
                    {tokenMintAddress}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className='flex items-center justify-center'>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      setTokenMintAddress('')
                      setFiles([])
                    }}
                  >
                    Create Another Token
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default CreateSplTokenForm
