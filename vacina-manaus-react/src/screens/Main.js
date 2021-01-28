import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  card: {
    maxWidth: 800,
    width: '80%',
    margin: 16
  }
}));

const options = {
  title: {
    text: 'Progresso da vacinação'
  },
  chart: {
    type: 'pie'
  },
  series: [{
    name: 'Pessoas',
    data: [
      {
        color: '#9fffe0',
        name: 'Pessoas vacinadas',
        y: 13182
      }, {
        color: '#ff79b0',
        name: 'Pessoas a vacinar',
        y: 2206398
      }
    ]
  }]
}

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h2">
              0 Vacinas aplicadas ate o momento
            </Typography>
            <Typography variant="body1">
              Ainda restam aproximadamente 0 pessoas a serem vacinadas em Manaus
            </Typography>
          </CardContent>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
          <CardActions>
            <Button size="small" color="primary">
              Veja mais dados sobre a vacinação
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Main;