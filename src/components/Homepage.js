import React, { useCallback, useEffect, useState, useContext } from 'react'
import clsx from 'clsx'

import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Container from '@material-ui/core/Container'
import Copyright from './Copyright'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import MenuIcon from '@material-ui/icons/Menu'
import MuiAlert from '@material-ui/lab/Alert'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Paper from '@material-ui/core/Paper'
import SidebarItems from './SidebarItems'
import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import VaccinesAtMoment from './VaccinesAtMoment'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { VaccineContext } from '../contexts/VaccineContext'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Chart from '../graphics/components/Chart'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
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
  },
  fixedHeight: {
    height: 240,
  },
}))

const option = {
  year: 'numeric',
  month: 'long' || 'short' || 'numeric',
  weekday: 'long' || 'short',
  day: 'numeric',
}
const locale = 'pt-br'

const Homepage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const { vaccine } = useContext(VaccineContext)
  const [openMenu, setOpenMenu] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [notification, setNotification] = useState({ badge: 1, alert: false })
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

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    if (
      vaccine.vaccinationByDate.length > 0 &&
      vaccine.vaccinationStatistics.length > 0
    ) {
      fetchVaccineData(vaccine.vaccinationByDate, vaccine.vaccinationStatistics)
      matches ? setOpenMenu(true) : setOpenMenu(false)
    }
  }, [fetchVaccineData, vaccine, matches])

  return (
    <div>
      {isLoading ? (
        <div> Carregando... </div>
      ) : (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='absolute'
            className={clsx(classes.appBar, openMenu && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
                onClick={handleMenu}
                className={clsx(
                  classes.menuButton,
                  openMenu && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component='h1'
                variant='h6'
                color='inherit'
                noWrap
                className={classes.title}
              >
                #VacinaManaus
              </Typography>
              <IconButton
                onClick={() => setNotification({ badge: 0, alert: true })}
                color='inherit'
              >
                <Badge badgeContent={notification.badge} color='secondary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !openMenu && classes.drawerPaperClose
              ),
            }}
            open={openMenu}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleMenu}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <SidebarItems />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth='xl' className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <Paper className={primaryPaper}>
                    <VaccinesAtMoment
                      vaccinesApplied={
                        vaccine.vaccinationStatistics[0].vaccinated
                      }
                    />
                  </Paper>
                  <Chart />
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
            <Snackbar
              open={notification.alert}
              autoHideDuration={5000}
              onClose={() => setNotification({ ...notification, alert: false })}
            >
              <MuiAlert
                severity='success'
                onClose={() =>
                  setNotification({ ...notification, alert: false })
                }
              >
                Última atualização dos dados:{' '}
                {new Date().toLocaleDateString(locale, option)}
              </MuiAlert>
            </Snackbar>
          </main>
        </div>
      )}
    </div>
  )
}

export default Homepage
