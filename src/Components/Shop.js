import React, { useContext } from 'react';
//Context
import { ProductsContext } from '../context/ProductContextProvider';
//Components
import Product from './shared/Product';
const Shop = () => {
    const products = useContext(ProductsContext);
    return (

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {products.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
          </div>
    );
};

export default Shop;