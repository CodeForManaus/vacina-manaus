import React, { createContext, useReducer, useEffect, useCallback } from 'react';
import { csv } from 'd3';
import { vaccineReducer } from '../reducers/vaccineReducer';

export const VaccineContext = createContext();

const VaccineContextProvider = (props) => {
  const [vaccine, dispatch] = useReducer(vaccineReducer, [], () => {
    return {
      vaccinationStatistics: [],
      vaccinationByDate: []
    }
  })

  const fetchData = useCallback(async () => {
    const vaccinationStatistics = await csv(`${process.env.REACT_APP_ANALYTICS_URL}/vaccination_count_statistics.csv`)
    delete vaccinationStatistics[0][""]
    const vaccinationByDate = await csv(`${process.env.REACT_APP_ANALYTICS_URL}/vaccine_date_count.csv`)
    dispatch({ type: "FETCH_VACCINATION_STATISTICS", vaccinationStatistics })
    dispatch({ type: "FETCH_VACCINATION_BY_DATE", vaccinationByDate })
  }, []) 

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <VaccineContext.Provider value={{ vaccine: vaccine, dispatch }}>
      {props.children}
    </VaccineContext.Provider>
  );
}
 
export default VaccineContextProvider;