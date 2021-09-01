import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import { Box, Paper, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from 'react-router-dom';
import fetchStore from '../api/fetchStore';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '75%',
        margin: 'auto',
        padding: '3rem 1rem',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        float: 'right',
    }
}));

const CheckoutTable = () => {
    const classes = useStyles();
    const [items, setItems] =  useState([]);

    useEffect(() => {
        fetchStore().then(fields => setItems(fields));
        console.log('items are ', items);
    }, []);

    console.log()
    let total = 0;

    const [quantity, setQuantity] = useState(1)

    const addItem = (e) => {
        setQuantity(quantity + 1);
      }
    const removeItem = (e) => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    }
    function deleteItem () {
        alert('Will delete item');
    } 

  return (
      <div className={classes.wrapper}>      
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Remove</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {items.map((item) => (
                <TableRow key={item.item_id}>
                    <TableCell align="center" component="th" scope="row">
                        <img src={item.imageUrl} alt="product-image" height='150' ></img>
                    </TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">
                        <Box component="span"> 
                            <IconButton size='small' onClick={removeItem}>
                                <RemoveIcon fontSize='small' />
                            </IconButton>
                            <span> {quantity} </span>
                            <IconButton size='small'onClick={addItem}>
                                <AddIcon fontSize='small'/>
                            </IconButton>
                        </Box>
                    </TableCell>
                    <TableCell align="center">$ {item.price * quantity}</TableCell>
                    <TableCell align="center">
                        <IconButton aria-label="delete" onClick={deleteItem} >
                            <DeleteIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <Box textAlign="right" m={2}>
            <Typography variant="h4">
                TOTAL: ${total}
            </Typography>
        </Box>
        <Box textAlign="right" m={3}>
            <Button variant="contained" color="primary" size="large">
                <Typography variant="p" displayInline>
                    <Link to='/process-payment' className={classes.link}> PROCESS PAYMENT</Link>
                </Typography>
            </Button>
        </Box>
    </div>
  );
};

export default CheckoutTable;
