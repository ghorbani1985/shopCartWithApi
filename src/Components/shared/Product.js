import React from 'react';
//Functions
import { shorten } from '../helper/functions';
const Products = ({productData}) => {
    return (
      <div className="w-full bg-white p-2 rounded-lg hover:shadow-lg flex flex-col items-center">
        <img src={productData.image} alt="product" className="object-fill w-40 h-40" />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
          <a>Details</a>
          <div>
            <button>Add to card</button>
          </div>
        </div>
      </div>
    );
};
export default Products;