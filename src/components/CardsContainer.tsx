import * as React from "react";
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import { addToCart } from '../redux/cart/reducer';
import { useDispatch } from 'react-redux';

type Product = {
      col_id: number,
      title: string,
      item_id: number,
      name: string,
      price: number,
      imageUrl: string
};

type CardsContainerProps = {
    rowName: string, 
    rawData: Array<Product>, 
    top5: boolean,
};

const getProductsForDisplay = (allProducts: Array<Product>,myFilter: string, keepOnly5: boolean) => {
    const filtered = allProducts.filter((product) => {
        return product.title === myFilter;
    });
    if (keepOnly5) {
        return filtered.slice(0,5);
    } else {
        return filtered;
    }
};

const CardsContainer: React.FC<CardsContainerProps> = ({rawData, rowName, top5}) => {
    const productsForDisplay = getProductsForDisplay(rawData,rowName,top5);
    const dispatch = useDispatch();
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
                            key={index}
                            productInfo={product} 
                            addToCartHandler={() => {dispatch(addToCart(product))}}
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