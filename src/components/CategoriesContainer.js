import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CategoryCard from "./CategoryCard";
import { categoryDisplayInfo } from "../assets/categoryDisplayInfo";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "90%",
    padding: "4em 2em 4em 2em",
  },
});

const CategoriesContainer = () => {
    const classes = useStyles();
    return (
        
            <Grid
            className={classes.root}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            >
                {
                    categoryDisplayInfo.map((category, index) => (
                        <Grid 
                            item 
                            key={index}
                            xs={4}
                        >
                            <CategoryCard
                            category={category}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        
    );
};

export default CategoriesContainer;