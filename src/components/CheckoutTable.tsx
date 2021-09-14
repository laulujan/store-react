import React, { useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import { Box, Paper, IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useHistory } from "react-router-dom";
import { increment, decrement, removeFromCart } from '../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from "../redux/types";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '75%',
        margin: 'auto',
        padding: '3rem 1rem',
    },
}));

const CheckoutTable: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((state: any) => state.cart.cartItems);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        let price = 0;
        items.forEach((item: CartItem) => {
            price += item.quantity * item.price;
        });
        setTotal(price)
    }, [items, total, setTotal]);

    const handlePayment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        history.push('/process-payment');
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
                        {items.map((item: CartItem) => (
                            <TableRow key={item.item_id}>
                                <TableCell align="center" component="th" scope="row">
                                    <img src={item.imageUrl} alt={item.name} height='150' ></img>
                                </TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">
                                    <Box component="span"> 
                                        <IconButton size='small' onClick={() => {dispatch(decrement(item.item_id))}}>
                                            <RemoveIcon fontSize='small' />
                                        </IconButton>
                                        <span> {item.quantity} </span>
                                        <IconButton size='small' onClick={() => {dispatch(increment(item.item_id))}}>
                                            <AddIcon fontSize='small'/>
                                        </IconButton>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">$ {item.price * item.quantity}</TableCell>
                                <TableCell align="center">
                                    <IconButton aria-label="delete" onClick={() => {dispatch(removeFromCart(item.item_id))}} >
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
                <Typography variant="body1" display="inline">
                    <Button variant="contained" color="primary" size="large" onClick={handlePayment}>PROCESS PAYMENT</Button>
                </Typography>
            </Box>
        </div>
    );
};

export default CheckoutTable;
