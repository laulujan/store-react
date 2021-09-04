import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import ShoppingCartPreview from "./ShoppingCartPreview";
import JWTUtil from "../util/JWTUtil";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

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
            href="/"
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
            <Link
              variant="button"
              color="textPrimary"
              href="/directory"
              className={classes.link}
            >
              Shop
            </Link>
            {JWTUtil.isSignedIn() ?
            <Link
              variant="button"
              color="textPrimary"
              onClick={JWTUtil.signOut}
              className={classes.link}
            >
              Log Out
            </Link> :
            <Link
              variant="button"
              color="textPrimary"
              href="/login"
              className={classes.link}
            >
              Log In
            </Link>}
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <ShoppingCartPreview
              anchorEl={anchorEl}
              handleClose={handleClose}
              items={[
                {
                  col_id: 5,
                  title: "Womens",
                  item_id: 30,
                  name: "Floral Blouse",
                  price: 20,
                  imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                  quantity: 1
                },
              ]}
            ></ShoppingCartPreview>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
