import PresaleDetailCard from '../../components/presale-detail-card'
import { Grid } from '@mui/material'

const PresaleDetails = ({ id }: { id: string }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <PresaleDetailCard />
      </Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
  )
}

export default PresaleDetails
