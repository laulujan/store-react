import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CardsContainer from "../components/CardsContainer";
import Spinner from '../components/Spinner';
import { setProducts } from "../redux/products/reducer";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const useStyles = makeStyles({
  categoryContainer: {
    padding: "1em",
  },
});

const Category: React.FC = () => {
  const classes = useStyles();
  let { category } = useParams<{category: string}>();

  const productsList = useAppSelector((state) => state.products);
  const { products, loading, error } = productsList;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return loading ? <Spinner message="Loading..." /> : error ? <div>{error}</div> :(
    <Grid container className={classes.categoryContainer}>
      <Grid item xs={12}>
        <CardsContainer
          rowName={category}
          rawData={products}
          top5={false}
        />
      </Grid>
    </Grid>
  );
};

export default Category;