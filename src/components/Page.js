import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Container from '@material-ui/core/Container'
import Copyright from './Copyright'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import MenuIcon from '@material-ui/icons/Menu'
import MuiAlert from '@material-ui/lab/Alert'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SidebarItems from './SidebarItems'
import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
    minWidth: 320,
  },
}))

const option = {
  year: 'numeric',
  month: 'long' || 'short' || 'numeric',
  weekday: 'long' || 'short',
  day: 'numeric',
}
const locale = 'pt-br'

const Page = ({ children, isLoading = false }) => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)
  const [notification, setNotification] = useState({ badge: 1, alert: false })

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  if (isLoading) {
    return <div> Carregando... </div>
  }

  return (
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
        anchor='left'
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
        <Container maxWidth='sm' className={classes.container}>
          {children}
        </Container>
        <Box pt={4}>
          <Copyright />
        </Box>
        <Snackbar
          open={notification.alert}
          autoHideDuration={5000}
          onClose={() => setNotification({ ...notification, alert: false })}
        >
          <MuiAlert
            severity='success'
            onClose={() => setNotification({ ...notification, alert: false })}
          >
            Última atualização dos dados:{' '}
            {new Date().toLocaleDateString(locale, option)}
          </MuiAlert>
        </Snackbar>
      </main>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.Node,
  isLoading: PropTypes.bool,
}

export default Page
