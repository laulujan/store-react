import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardsContainer from '../components/CardsContainer';
import { useSelector } from 'react-redux';
// import { productsResponse } from '../dummydata/dummy_products';


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

    const dummyProductsAll = useSelector(state => state.cart.products);

    const dummyProductCategories = new Set(dummyProductsAll.map((product) => {
        return product.title;
    }));

    return (
        <Grid container className={classes.directoryContainer}>
            {
                [...dummyProductCategories].map((category, index) => (
                    <Grid item xs={12} className={classes.categoryRow}>
                        <CardsContainer
                        key={index}
                        rowName={category}
                        rawData={dummyProductsAll}
                        top5={true}
                    />
                    </Grid>
                ))
            }
            
        </Grid>
    );
};

export default Directory;