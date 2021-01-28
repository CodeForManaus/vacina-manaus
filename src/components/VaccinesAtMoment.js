import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  cardContext: {
    flex: 1,
  },
});

const option = {
  year: 'numeric',
  month: ('long' || 'short' || 'numeric'),
  weekday: ('long' || 'short'),
  day: 'numeric',
}
const locale = 'pt-br'

export default function VaccinesAtMoment({ vaccinesApplied }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        Vacinas tomadas até o momento
      </Typography>
      <Typography component="p" variant="h3">
        {vaccinesApplied}
      </Typography>
      <Typography color="textSecondary" className={classes.cardContext}>
        {new Date().toLocaleDateString(locale, option)}
      </Typography>
      <div>
      <Button
        onClick={() => window.open("http://localhost:3000/metrics.html", "_self")}
        variant="contained"
        color="primary"
      >
        Ver mais
      </Button>
      </div>
    </React.Fragment>
  );
}
