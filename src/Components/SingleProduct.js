import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
//Context
import { ProductsContext } from '../context/ProductContextProvider';
const SingleProduct = (props) => {
const params = useParams();
  const id = params.id; 
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const {image, title, description, price, category} = product;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category</span>
          {category} $
        </p>
      </div>
      <div>
        <span>{price}</span>
        <Link to="/shop">Back To Shop</Link>
      </div>
    </div>
  );
};
export default SingleProduct;

