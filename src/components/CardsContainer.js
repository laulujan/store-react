import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const getProductsForDisplay = (allProducts,myFilter,keepOnly5) => {
    const filtered = allProducts.filter((product) => {
        return product.title === myFilter;
    });
    if (keepOnly5) {
        return filtered.slice(0,5);
    } else {
        return filtered;
    }
};

const CardsContainer = ({rowName, rawData, top5}) => {
    const productsForDisplay = getProductsForDisplay(rawData,rowName,top5);
    const addToCartAction = () => {
        alert("you added a product to the cart :)");
    };
    //console.log(rowName);
    return (
        <div>
            <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item xs={12}><h2>{rowName}</h2></Grid> 
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            >
                {
                    productsForDisplay.map((product, index) => (
                        <Grid item key={index}>
                            <ProductCard
                            productInfo={product} 
                            addToCartHandler={addToCartAction}
                            isCardSmall={top5}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            </Grid>
            
        </div>
    );
};

export default CardsContainer;