import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Spinner from '../components/Spinner';
import CardsContainer from '../components/CardsContainer';
import  { setProducts }  from '../redux/products/reducer';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

const useStyles = makeStyles({
    directoryContainer: {
      padding: '1em',
      
    },
    categoryRow: {
        margin: '1em 0em 1em 0em',
    },
  });

const Directory: React.FC = () => {
    const classes = useStyles();
    const productsList = useAppSelector(state => state.products);
    const {products, loading, error } = productsList;
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(setProducts());
    }, [dispatch]);

    const productCategories = Array.from(new Set(products.map((product) => {
        return product.title;
    })));

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
