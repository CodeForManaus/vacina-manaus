import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  cardContext: {
    flex: 1,
  },
})

export default function ConclusionTrend({ vaccineTrend }) {
  const classes = useStyles()
  const { trend_3_days: daysLeft, vaccine_date: date } = vaccineTrend

  return (
    <React.Fragment>
      <Typography component='h2' variant='h5' gutterBottom>
        Tendência de conclusão
      </Typography>
      <Typography component='p' variant='h3'>
        {daysLeft} dias
      </Typography>
      <Typography className={classes.cardContext}>
        Considerando o ritmo atual de vacinação e a meta de 70% da população
      </Typography>
      <Typography component='p' variant='subtitle2'>
        Última atualização dia {date}
      </Typography>
    </React.Fragment>
  )
}

ConclusionTrend.propTypes = {
  vaccineTrend: PropTypes.object,
}
