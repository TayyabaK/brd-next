'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
// import ModeDropdown from '@components/layout/shared/ModeDropdown'
// import UserDropdown from '@components/layout/shared/UserDropdown'
import dynamic from 'next/dynamic'

const WalletMultiButton = dynamic(async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton, {
  ssr: false
})

// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

const styles = {
  connect: {
    background: 'linear-gradient(135deg, #01FEA8 0%, #46A5FF 51.04%, #D632FF 100%)',
    borderRadius: '50px',
    height: 'auto',
    lineHeight: 'normal',
    padding: '10px 24px'
  }
}

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
        {/* <ModeDropdown /> */}
      </div>
      <div className='flex items-center'>
        {/* <UserDropdown /> */}
        <WalletMultiButton style={styles.connect} />
      </div>
    </div>
  )
}

export default NavbarContent
