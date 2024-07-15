// Type Imports
import type { ChildrenType } from '../../../../../@core/types'

// Component Imports
import BlankLayout from '../../@layouts/BlankLayout'

import Providers from '../../components/Providers'

// Util Imports
import { getSystemMode } from '../../../../../@core/utils/serverHelpers'

type Props = ChildrenType

const Layout = ({ children }: Props) => {
  // Vars
  const direction = 'ltr'
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
