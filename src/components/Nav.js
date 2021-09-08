import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartPreview from "./ShoppingCartPreview";
import { logOut } from "../redux/user/reducer";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecorationLine: "none"
  },
  logo: {
    maxWidth: 40,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Nav = () => {
  const classes = useStyles();
  const cartItems = useSelector(state => state.cart.cartItems)

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const [cartCount, setCartCount] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let count = 0;
    cartItems.forEach(item =>
      count += item.quantity
    );
    setCartCount(count);
  }, [cartItems])

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="button"
            color="textPrimary"
            to="/"
            className={classes.link}
          >
            <img src="/dummylogo.png" alt="logo" className={classes.logo} />
          </Link>
          
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Shop
            </Typography>
          
          <nav>
            <Button>
              <Link
                variant="button"
                color="textPrimary"
                to="/directory"
                className={classes.link}
              >
                Shop
              </Link>
            </Button>
            {token ?
            <Button
              className={classes.link}
              onClick={handleLogOut}
            >
              Log Out
            </Button> :
            <Button>
              <Link
                variant="button"
                color="textPrimary"
                to="/log-in"
                className={classes.link}
              >
                Log In
              </Link>
            </Button>
            }
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <ShoppingCartPreview
              anchorEl={anchorEl}
              handleClose={handleClose}
              items={cartItems}
            ></ShoppingCartPreview>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
