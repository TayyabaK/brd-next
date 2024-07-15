// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '../../../../@core/types'

// Style Imports
import '@/app/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'

// Generated Icon CSS Imports
import '../assets/iconify-icons/bundle-icons-css'
import { WalletConnectProvider } from '../components/context/walletConnectProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'Asvoria Launchpad',
  description: 'Asvoria Launchpad for Solana'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <WalletConnectProvider>{children}</WalletConnectProvider>
        <ToastContainer theme='dark' />
      </body>
    </html>
  )
}

export default RootLayout
