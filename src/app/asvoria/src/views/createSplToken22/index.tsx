'use client'

import BackBtn from '../../components/btnBack'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import CreateSplTokenForm from '../create-token22-form'

const CreateSPLToken = () => {
  const router = useRouter()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <BackBtn />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4'>Create SPL Token 2022</Typography>
        <Typography>Please enter basic information about your token</Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateSplTokenForm />
      </Grid>
    </Grid>
  )
}

export default CreateSPLToken
