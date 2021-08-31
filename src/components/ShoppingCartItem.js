import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";


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
  const [quantity, setQuantity] = useState(item.quantity)

  const addItem = (e) => {
    setQuantity(quantity + 1)
  }
  const removeItem = (e) => {
    setQuantity(quantity - 1)
    if(quantity <= 0){
      deleteItem()
    }
  }
  const deleteItem = (e) => {
    //here will be the function to remove item from the storage items
    console.log(`deleted item ${item.name}`)
  }

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
            
            <IconButton onClick={removeItem}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{quantity}</Typography>
            <IconButton onClick={addItem}>
              <AddIcon />
            </IconButton>
            <Typography variant="body2">Total</Typography>
            <IconButton onClick={deleteItem}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
      </div>
    
          
  );
};

export default ShoppingCart;
