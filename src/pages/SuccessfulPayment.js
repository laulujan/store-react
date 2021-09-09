import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from 'react-redux';
import { deleteCart, toggleVisibility} from '../redux/cart/reducer';


const useStyles = makeStyles(theme => ({
    styledMessage: {
        textAlign: 'center',
        margin: '2rem',
    }
}))


const SuccessfulPayment = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deleteCart());
        dispatch(toggleVisibility(true));
    }, []);

    return (
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