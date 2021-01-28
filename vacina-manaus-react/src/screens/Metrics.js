import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import {Helmet} from "react-helmet";
import Highcharts, { addFunnel } from 'highcharts'
import ReactDOM from 'react-dom';
import data from '../data/data';

const Metrics = () => {

  return (
    <Helmet>
      <script type="module">
        {`
          Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Vacinas aplicadas por zona (área) de Manaus'
            },
            data: {
                csvURL: 'https://raw.githubusercontent.com/pvfrota/vacina-manaus/master/db/area_count.csv',
                enablePolling: true,
                dataRefreshRate: 10
            }
          });
        `}
      </script>            
    </Helmet>
  );
}

export default Metrics;