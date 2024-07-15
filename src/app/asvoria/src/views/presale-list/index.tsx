import PresaleCard from '../../components/presale-card'
import { Grid } from '@mui/material'

const PresaleList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PresaleCard />
      </Grid>
    </Grid>
  )
}

export default PresaleList
