import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CategoryCard from "./CategoryCard";
import { categoryDisplayInfo } from "../assets/categoryDisplayInfo";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "90%",
    padding: "4em 0em 4em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
                            className={classes.cardBox}
                            item 
                            key={index}
                            xs={4}
                        >
                            <CategoryCard
                            id={category.id}
                            name={category.name}
                            filename={category.filename}
                            alt={category.alt}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        
    );
};

export default CategoriesContainer;