import CustomAvatar from '../../../../../@core/components/mui/Avatar'
import CustomChip from '../../../../../@core/components/mui/Chip'
import { Box, Card, CardContent, Typography } from '@mui/material'

const PresaleDetailCard = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex' }} justifyContent={'space-between'} alignItems={'center'}>
          <Box sx={{ display: 'flex' }} justifyContent={'space-between'} alignItems={'center'} className='space-x-4'>
            <CustomAvatar
              size={56}
              alt='tokenImage'
              src='https://ipfs.io/ipfs/QmfP7xy2b7hBk8MXxu9vHr1ZhhzLQTc2JzWMmjJnBHKed6'
            />
            <Box>
              <Typography variant='h5' component='div'>
                DOGO TOKEN
              </Typography>
              <Box></Box>
            </Box>
          </Box>
          <CustomChip round='true' label='Sale Live' variant='outlined' color='success' />
        </Box>
      </CardContent>
    </Card>
  )
}

export default PresaleDetailCard
