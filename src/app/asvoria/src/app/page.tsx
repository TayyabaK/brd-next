'use client'

import { Button, ButtonProps, Grid, Typography, styled } from '@mui/material'

import { useRouter } from 'next/navigation'
import FAQ from '../views/faq'

// import FAQ from '@/views/faq'

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#fff',
  background: 'linear-gradient(135deg, #01FEA8 0%, #46A5FF 51.04%, #D632FF 100%)',
  borderRadius: '50px',
  height: 'auto',
  lineHeight: 'normal',
  padding: '10px 24px'
}))

export default function Page() {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex items-center justify-center mt-5'>
          <img src='/images/web/logo.png' alt='logo' width={'100px'} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <Typography variant='h2' component={'h2'} textAlign={'center'}>
            Asvoria Launchpad
          </Typography>
          <Typography textAlign={'center'}>Discover Solana Launchpad, the ultimate platform on solana</Typography>
          <Typography textAlign={'center'}>
            Instantly create tokens and presales or join solana presales in second
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-center'>
          <CustomButton onClick={() => router.push('/list/presales')}>Explore</CustomButton>
        </div>
      </Grid>

      <Grid item xs={12}>
        <FAQ />
      </Grid>
    </Grid>
  )
}
