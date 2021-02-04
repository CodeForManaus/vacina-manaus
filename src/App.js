import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Homepage from './components/Homepage'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App
