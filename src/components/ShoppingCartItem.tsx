import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import { increment, decrement, removeFromCart } from '../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../redux/store";


const useStyles = makeStyles(() => ({
  item: {
    alignItems: "center",
    display: "flex",
    "&:hover": {
      cursor: "pointer",
    },
  },

  imgMini: {
    width: "5em",
    height: "5em",
    margin: 5,
  },
  num: {
    margin: "1em",
  }
}));

type Item = {
  item_id: number,
  name: string,
  price: number,
  imageUrl: string,
  quantity: number,
  total: number
};

type ShoppingCartProps = {
  item: Item,
};

const ShoppingCart = ({ item }: ShoppingCartProps ) => {
  const dispatch = useDispatch();
  const [itemTotal, setItemTotal] = useState(0);
  const functionalView = useSelector((state: RootState) => state.cart.isVisible)


  useEffect(() => {
    let currentTotal = item.quantity * item.price
    setItemTotal(currentTotal)
  }, [itemTotal, setItemTotal, item.quantity, item.price]);

  const classes = useStyles();

  if (functionalView) {
    return (
      <div >
          <Box className={classes.item}>
            <img
              alt={item.name}
              className={classes.imgMini}
              src={item.imageUrl}
            />
            <div>
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body2">Price: {item.price}</Typography>
            </div>
            <IconButton onClick={() => {dispatch(decrement(item.item_id))}}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{item.quantity}</Typography>
            <IconButton onClick={() => {dispatch(increment(item.item_id))}}>
              <AddIcon />
            </IconButton>
            <Typography variant="body2">Total ${itemTotal}</Typography>
            <IconButton onClick={() => {dispatch(removeFromCart(item.item_id))}}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
      </div>    
    );
  } else {
    return (
      <div >
         <Box className={classes.item}>
            <img
              alt={item.name}
              className={classes.imgMini}
              src={item.imageUrl}
            />
            <div>
            <Typography variant="body1">{item.name}</Typography>
            </div>
            <Typography variant="body2" className={classes.num}>Price: {item.price}</Typography>
            <Typography variant="body2" className={classes.num}>x{item.quantity}</Typography>
            <Typography variant="body2">Total ${itemTotal}</Typography>
          </Box>
          <Divider />
      </div>
    )
  }
};

export default ShoppingCart;
