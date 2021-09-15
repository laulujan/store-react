import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  center:{
      margin: 'auto',
  }
}));

type SpinnerProps = {
    message: string
}

const Spinner: React.FC<SpinnerProps> = ({message}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.center}/>
      <Typography className={classes.center}>{message}</Typography>
    </div>
  );
}

export default Spinner