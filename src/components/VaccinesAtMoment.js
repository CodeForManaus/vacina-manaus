import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  cardContext: {
    flex: 1
  }
})

const option = {
  year: 'numeric',
  month: ('long' || 'short' || 'numeric'),
  weekday: ('long' || 'short'),
  day: 'numeric'
}
const locale = 'pt-br'

export default function VaccinesAtMoment ({ vaccinesApplied }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" gutterBottom>
        Vacinas aplicadas até o momento
      </Typography>
      <Typography component="p" variant="h3">
        {vaccinesApplied}
      </Typography>
      <Typography className={classes.cardContext}>
        {new Date().toLocaleDateString(locale, option)}
      </Typography>
      <div>
      <Button
        onClick={() => window.open(process.env.REACT_APP_BASE_URL + '/metrics.html', '_self')}
        variant="contained"
        style={{ color: '#1565c0', backgroundColor: 'white', fontWeight: 600 }}
      >
        Ver mais
      </Button>
      </div>
    </React.Fragment>
  )
}

VaccinesAtMoment.propTypes = {
  vaccinesApplied: PropTypes.string
}
