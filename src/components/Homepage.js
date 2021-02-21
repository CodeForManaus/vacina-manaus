import React, { useEffect, useState, useContext } from 'react'
import clsx from 'clsx'

import Paper from '@material-ui/core/Paper'
import VaccinesAtMoment from './VaccinesAtMoment'
import { VaccineContext } from '../contexts/VaccineContext'
import { makeStyles } from '@material-ui/core/styles'

import Page from './Page'
import VaccinesRhythm from './VaccinesRhythm'
import ConclusionTrend from './ConclusionTrend'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    margin: 12,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  cardPrimary: {
    background: 'linear-gradient(#1565c0, #9198e5)',
    color: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 10px 1px',
    textAlign: 'center',
  },
  cardSecondary: {
    boxShadow: 'rgba(0, 0, 0, 0.75) 0px 1px 10px 1px',
    textAlign: 'center',
  },
  fixedHeight: {
    minHeight: 240,
  },
}))

const Homepage = () => {
  const classes = useStyles()
  const { vaccine } = useContext(VaccineContext)
  const [isLoading, setLoading] = useState(true)
  const primaryPaper = clsx(
    classes.paper,
    classes.cardPrimary,
    classes.fixedHeight
  )
  const cardSecondary = clsx(
    classes.paper,
    classes.cardSecondary,
    classes.fixedHeight
  )

  useEffect(() => {
    if (vaccine.vaccinationStatistics.length > 0) {
      setLoading(false)
    }
  }, [vaccine])

  return (
    <Page isLoading={isLoading}>
      <Paper className={primaryPaper}>
        <VaccinesAtMoment
          vaccinesApplied={vaccine?.vaccinationStatistics?.[0]?.vaccinated}
        />
      </Paper>
      <Paper className={cardSecondary}>
        <VaccinesRhythm avgVaccineDays={vaccine?.vaccinationMovingAvg} />
      </Paper>
      <Paper className={cardSecondary}>
        <ConclusionTrend vaccineTrend={vaccine?.vaccinationTrend} />
      </Paper>
    </Page>
  )
}

export default Homepage
