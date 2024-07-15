// Third-party Imports
import classnames from 'classnames'

// Type Imports
import { horizontalLayoutClasses } from '../../utils/layoutClasses'
import { ChildrenType } from '../../../../../../@core/types'

// Util Imports

const Navbar = ({ children }: ChildrenType) => {
  return (
    <div className={classnames(horizontalLayoutClasses.navbar, 'flex items-center justify-between is-full')}>
      {children}
    </div>
  )
}

export default Navbar
