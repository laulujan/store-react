import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardsContainer from '../components/CardsContainer';
import { productsResponse } from '../dummydata/dummy_products';


const useStyles = makeStyles({
    categoryContainer: {
      padding: "1em",
      
    },
  });

const dummyProductsAll = productsResponse.data;

const dummyCategory = dummyProductsAll[10].title;

const Category = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.categoryContainer}>
            <Grid item xs={12} className={classes.categoryRow}>
                <CardsContainer
                        rowName={dummyCategory}
                        rawData={dummyProductsAll}
                        top5={false}
                        
                />
            </Grid>
        </Grid>
    );
};

export default Category;