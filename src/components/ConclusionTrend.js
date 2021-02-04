import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  cardContext: {
    flex: 1
  }
})

export default function ConclusionTrend ({ vaccineTarget, daysLeft }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Tendência de conclusão
      </Typography>
      <Typography component="p" variant="h3">
      {daysLeft} dias
      </Typography>
      <Typography color="textSecondary" className={classes.cardContext}>
        Considerando o ritmo atual de vacinação e a meta de {vaccineTarget}% da população
      </Typography>

    </React.Fragment>
  )
}
