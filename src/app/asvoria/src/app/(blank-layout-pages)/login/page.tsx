// Next Imports
import type { Metadata } from 'next'

// Component Imports
import LoginV2 from '../../../views/Login'

// Server Action Imports
import { getServerMode } from '../../../../../../@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = () => {
  // Vars
  const mode = getServerMode()

  return <LoginV2 mode={mode} />
}

export default LoginPage
