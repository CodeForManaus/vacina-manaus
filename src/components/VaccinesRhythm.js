import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  cardContext: {
    flex: 1,
  },
})

export default function VaccinesRhythm({ avgVaccineDays }) {
  const classes = useStyles()
  const { moving_avg_3_days: movingAvg, vaccine_date: date } = avgVaccineDays

  return (
    <React.Fragment>
      <Typography component='h2' variant='h5' gutterBottom>
        Ritmo atual de vacinação
      </Typography>
      <Typography component='p' variant='h3'>
        {movingAvg}
      </Typography>
      <Typography className={classes.cardContext}>
        Média de vacinação dos últimos 3 dias
      </Typography>
      <Typography component='p' variant='subtitle2'>
        Última atualização dia {date}
      </Typography>
    </React.Fragment>
  )
}

VaccinesRhythm.propTypes = {
  avgVaccineDays: PropTypes.object,
}
