import { Button, ButtonProps, styled } from '@mui/material'

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#fff',
  background: 'linear-gradient(135deg, #01FEA8 0%, #46A5FF 51.04%, #D632FF 100%)',
  height: 'auto',
  lineHeight: 'normal',
  padding: '10px 24px'
}))

export default CustomButton
