// Type Imports
import type { VerticalMenuDataType } from '../../types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Create Token',
    children: [
      {
        label: 'Spl Token',
        href: '/about',
        icon: 'tabler-info-circle'
      },
      {
        label: 'Token 2022',
        href: '/about',
        icon: 'tabler-info-circle'
      }
    ]
  }
]

export default verticalMenuData
