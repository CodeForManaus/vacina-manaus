import React, { useCallback, useEffect, useState, useContext } from 'react'
import clsx from 'clsx'

import Paper from '@material-ui/core/Paper'
import VaccinesAtMoment from './VaccinesAtMoment'
import { VaccineContext } from '../contexts/VaccineContext'
import { makeStyles } from '@material-ui/core/styles'

import Page from './Page'

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

  const fetchVaccineData = useCallback((vbd, vs) => {
    let amountOfDays = 0
    vbd.forEach((item) => {
      amountOfDays = amountOfDays + parseInt(item.count)
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    if (
      vaccine.vaccinationByDate.length > 0 &&
      vaccine.vaccinationStatistics.length > 0
    ) {
      fetchVaccineData(vaccine.vaccinationByDate, vaccine.vaccinationStatistics)
    }
  }, [fetchVaccineData, vaccine])

  return (
    <Page isLoading={isLoading}>
      <Paper className={primaryPaper}>
        <VaccinesAtMoment
          vaccinesApplied={vaccine?.vaccinationStatistics?.[0]?.vaccinated}
        />
      </Paper>
    </Page>
  )
}

export default Homepage
