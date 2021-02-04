import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  cardContext: {
    flex: 1
  }
})

export default function VaccinesRhythm ({ avgVaccineDays, begginigVaccination }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Ritmo atual de vacinação
      </Typography>
      <Typography component="p" variant="h3">
      {avgVaccineDays}
      </Typography>
      <Typography color="textSecondary" className={classes.cardContext}>
      vacinas aplicadas por dia desde {begginigVaccination}
      </Typography>

    </React.Fragment>
  )
}
