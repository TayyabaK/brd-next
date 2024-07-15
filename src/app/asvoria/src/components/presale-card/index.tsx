import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CustomAvatar from '@core/components/mui/Avatar'
import { Grid } from '@mui/material'
import CustomChip from '@core/components/mui/Chip'
import LinearProgress from '@mui/material/LinearProgress'

export default function PresaleCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex' }} justifyContent={'space-between'} alignItems={'center'}>
          <CustomAvatar
            size={56}
            alt='tokenImage'
            src='https://ipfs.io/ipfs/QmfP7xy2b7hBk8MXxu9vHr1ZhhzLQTc2JzWMmjJnBHKed6'
          />
          <CustomChip round='true' label='Sale Live' variant='outlined' color='success' />
        </Box>
        <Box className='mt-4'>
          <Typography variant='h5' component='div'>
            DOGO TOKEN
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            1 SOL = 1000000 LAMAHOEZz
          </Typography>
        </Box>
        <Box className='mt-4'>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Soft/Hard
          </Typography>
          <Typography variant='h5' component='div'>
            65 SOL - 125 SOL
          </Typography>
        </Box>
        <Box className='mt-2'>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Progress 40%
          </Typography>
          <LinearProgress variant='determinate' value={40} color='success' />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box className='mt-2'>
              <Typography color='text.secondary'>50 SOL</Typography>
              <Typography className='font-semibold' color='text.secondary'>
                Raised
              </Typography>
            </Box>
            <Box>
              <Typography color='text.secondary'>125 SOL</Typography>
              <Typography className='font-semibold' color='text.secondary'>
                Hard Cap
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Box className='flex w-full flex-row-reverse'>
          <Button
            size='small'
            variant='outlined'
            sx={{ color: '#0eedb8', borderColor: '#0eedb8' }}
            className='rounded-full'
            href='/list/presales/1'
          >
            View Details
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
