import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Spinner from '../components/Spinner';
import CardsContainer from '../components/CardsContainer';
import { useSelector, useDispatch } from 'react-redux';
import  { setProducts }  from "../redux/products/reducer";

const useStyles = makeStyles({
    directoryContainer: {
      padding: "1em",
      
    },
    categoryRow: {
        margin: "1em 0em 1em 0em",
    },
  });

const Directory = () => {
    const classes = useStyles();

    const productsList = useSelector(state => state.products);
    const {products, loading, error } = productsList;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setProducts())
    }, [dispatch])

    const productCategories = new Set(products.map((product) => {
        return product.title;
    }));

    return  loading ? <Spinner message="Loading..." /> : error ? <div>{error}</div> : (
        <Grid container className={classes.directoryContainer}>
            {
                [...productCategories].map((category, index) => (
                    <Grid key={index} item xs={12} className={classes.categoryRow}>
                        <CardsContainer
                            key={index}
                            rowName={category}
                            rawData={products}
                            top5={true}
                    />
                    </Grid>
                ))
            }
            
        </Grid>
    );
};

export default Directory;