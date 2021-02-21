import React, { createContext, useReducer, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { csv } from 'd3'
import { vaccineReducer } from '../reducers/vaccineReducer'

export const VaccineContext = createContext()

const VaccineContextProvider = (props) => {
  const [vaccine, dispatch] = useReducer(vaccineReducer, [], () => {
    return {
      vaccinationStatistics: [],
      vaccinationTrend: {},
      vaccinationMovingAvg: {},
    }
  })

  const lastObject = (obj) => {
    return Object.keys(obj).length - 2
  }

  const fetchData = useCallback(async () => {
    const vaccinationStatistics = await csv(
      `${process.env.REACT_APP_ANALYTICS_URL}/vaccination_count_statistics.csv`
    )
    delete vaccinationStatistics[0]['']

    const vaccinationFetch = await csv(
      `${process.env.REACT_APP_ANALYTICS_URL}/vaccine_trend.csv`
    )
    const vaccinationTrend = vaccinationFetch[lastObject(vaccinationFetch)]

    const vaccinationMovingAvgFetch = await csv(
      `${process.env.REACT_APP_ANALYTICS_URL}/vaccine_date_count_moving_avg.csv`
    )
    const vaccinationMovingAvg =
      vaccinationMovingAvgFetch[lastObject(vaccinationMovingAvgFetch)]

    dispatch({ type: 'FETCH_VACCINATION_STATISTICS', vaccinationStatistics })
    dispatch({ type: 'FETCH_VACCINATION_TREND', vaccinationTrend })
    dispatch({ type: 'FETCH_VACCINATION_MOVING_AVG', vaccinationMovingAvg })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <VaccineContext.Provider value={{ vaccine, dispatch }}>
      {props.children}
    </VaccineContext.Provider>
  )
}

VaccineContextProvider.propTypes = {
  children: PropTypes.any,
}

export default VaccineContextProvider
