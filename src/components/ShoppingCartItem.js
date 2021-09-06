import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import { removeFromCart } from '../redux/cart/reducer';
import { useDispatch } from 'react-redux';
import { increment } from "../redux/cart/reducer";



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
}));

const ShoppingCart = ({ item }) => {
  const dispatch = useDispatch();
  const [itemTotal, setItemTotal] = useState(0);
  // const [numItems, setNumItems] = useState(item.quantity);
  
  // const [quantity, setQuantity] = useState(item.quantity)

  // const addItem = () => {
  //   setNumItems(numItems + 1);
  //   dispatch(increment(item.item_id));
  // }
  // const removeItem = (e) => {
  //   setQuantity(quantity - 1)
  //   if(quantity <= 0){
  //     deleteItem()
  //   }
  // }
  // const deleteItem = (e) => {
  //   //here will be the function to remove item from the storage items
  //   console.log(`deleted item ${item.name}`)
  // }
  useEffect(() => {
    let currentTotal = item.quantity * item.price
    setItemTotal(currentTotal)
  }, [itemTotal, setItemTotal, item.quantity]);

  const classes = useStyles();
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
            
            <IconButton>
            {/* <IconButton > */}
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{item.quantity}</Typography>

            {/* <IconButton onClick={addItem}> */}
            <IconButton onClick={() => {dispatch(increment(item.item_id))}}>
              <AddIcon />
            </IconButton>
            <Typography variant="body2">Total ${itemTotal}</Typography>

            {/* <IconButton onClick={deleteItem}> */}
            <IconButton onClick={() => {dispatch(removeFromCart(item.item_id))}}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
      </div>
    
          
  );
};

export default ShoppingCart;
