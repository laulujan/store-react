import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardsContainer from "../components/CardsContainer";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/products/reducer";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  categoryContainer: {
    padding: "1em",
  },
});

const Category = () => {
  const classes = useStyles();
  let { category } = useParams();

  const productsList = useSelector((state) => state.products);
  const { products, loading, error } = productsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  return loading ? <div>loading..</div> : error ? <div>{error}</div> :(
    <Grid container className={classes.categoryContainer}>
      <Grid item xs={12} className={classes.categoryRow}>
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
