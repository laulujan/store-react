import React, { useState, useEffect } from 'react'
import Menu from '@material-ui/core/Menu'
import  MenuItem  from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import ShoppingCartItem from './ShoppingCartItem'
import { makeStyles } from "@material-ui/core/styles";
import  Typography  from '@material-ui/core/Typography'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(() => ({
    btn: {
      margin: 5
    },
  }));



const ShoppingCartPreview = ({anchorEl, handleClose, items}) => {
    const classes = useStyles()
    const history = useHistory();

    const [total, setTotal] =  useState(0);

    useEffect(() => {
      let price = 0;
      items.forEach(item => {
        price += item.quantity * item.price
      });
      setTotal(price)
    }, [items, total, setTotal]);
    
    const handleCheckOut = (e) => {
    history.push('/checkout');
} 
    return (
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

      {items.map(item =>  {
          return (
            <MenuItem >
                <ShoppingCartItem key={item.item_id} item={item}/>
            </MenuItem>
          )
      })}
      <Typography variant="body2">Total: ${total} </Typography>
        <Button variant="contained" color="primary" className={classes.btn} onClick={handleCheckOut}>Checkout </Button>
      </Menu>
    )
}

export default ShoppingCartPreview
