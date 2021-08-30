import React from 'react';
import ProductCard from '../components/ProductCard';
import { productsResponse } from '../dummydata/dummy_products';

const myDummyProduct = productsResponse.data[3];

const Category = () => {
    // dummy function as example for the Card props:
    const addToCartAction = () => {
        alert("you added a product to the cart :)");
    };
    return (
        <div>
            <ProductCard 
            productInfo={myDummyProduct} 
            addToCartHandler={addToCartAction}
            />
        </div>
    );
};

export default Category;