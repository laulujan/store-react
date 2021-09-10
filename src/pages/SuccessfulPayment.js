import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { deleteCart, toggleVisibility } from "../redux/cart/reducer";
import { Link } from "react-router-dom";

import Spinner from "../components/Spinner";

const useStyles = makeStyles((theme) => ({
  styledMessage: {
    textAlign: "center",
    margin: "2rem",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecorationLine: "none",
  },
}));

const SuccessfulPayment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteCart());
    dispatch(toggleVisibility(true));
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  return isLoading ? (
    <Spinner message="Processing your payment..." />
  ) : (
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
      <Link
        variant="button"
        color="textPrimary"
        to="/"
        className={classes.link}
      >
        <Typography>Continue shopping</Typography>
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
