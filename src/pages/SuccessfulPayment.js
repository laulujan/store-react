import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Spinner from '../components/Spinner';

const useStyles = makeStyles(theme => ({
    styledMessage: {
        textAlign: 'center',
        margin: '2rem',
    }
}))


const SuccessfulPayment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();
    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    return () => clearTimeout(timer);
    },[]);
    return  isLoading ? <Spinner message="Processing your payment..."/> : (
        <div className={classes.styledMessage}>
            <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.styledMessage}
          >
            Your payment has been successfully processed!
          </Typography>
            <img src="success.png" alt="Success"></img>
        </div>
    );
};

export default SuccessfulPayment;