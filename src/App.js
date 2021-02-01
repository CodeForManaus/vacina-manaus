import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { csv } from 'd3';
import Homepage from './components/Homepage'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
  },
});

const App = () => {
  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    const vaccinationStatistics = await csv(`${process.env.REACT_APP_ANALYTICS_URL}/vaccination_count_statistics.csv`)
    delete vaccinationStatistics[0][""]
    const vaccinationByDate = await csv(`${process.env.REACT_APP_ANALYTICS_URL}/vaccine_date_count.csv`)
    dispatch({ type: "FETCH_VACCINATION_STATISTICS", vaccinationStatistics })
    dispatch({ type: "FETCH_VACCINATION_BY_DATE", vaccinationByDate })
  }, [dispatch]) 

  useEffect(() => {
    fetchData()
  }, [fetchData]);
  
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
