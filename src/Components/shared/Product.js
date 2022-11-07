import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import plusIcon from '../../assets/images/svg/plus.svg';
import minusIcon from '../../assets/images/svg/minus.svg';
import trashIcon from '../../assets/images/svg/trash.svg';
import shoppingCartIcon from "../../assets/images/svg/shoppingCart.svg";
const Products = ({productData}) => {
 const { state, dispatch } = useContext(CartContext);
    return (
      <div className="w-full bg-white text-slate-800 p-2 rounded-lg transition-all ease-in-out duration-500 hover:shadow-xl hover:-mt-2 flex flex-col items-center border-2 border-gray-200 border-solid">
        <Link to={`/shop/${productData.id}`}>
          <img src={productData.image} alt="product" className="object-fill w-40 h-40" />
          <h3 className="my-4 text-red-500">{shorten(productData.title)}</h3>
          <p className="text-green-500">{productData.price}</p>
        </Link>
        <div className="flex justify-center items-center">
          {isInCart(state, productData.id) ? (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: productData })}
              className="bg-orange-500 text-white w-full rounded-lg px-8 py-2 font-lg my-4 transition-all ease-in-out duration-500 hover:bg-orange-600 hover:border-2 hover:border-orange-500 hover:border-solid"
            >
              <img src={plusIcon} alt="plusIcon" className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
              className="bg-orange-500 text-white w-full flex items-center rounded-lg px-8 py-2 font-lg my-4 transition-all ease-in-out duration-500 hover:bg-orange-600 hover:border-2 hover:border-orange-500 hover:border-solid"
            >
              <img src={shoppingCartIcon} alt="shoppingCartIcon" className="w-6 h-6" />
              <span className="pl-2">Add to Cart</span>
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}
              className="bg-orange-500 text-white w-full rounded-lg ml-2 px-8 py-2 font-lg my-4 transition-all ease-in-out duration-500 hover:bg-orange-600 hover:border-2 hover:border-orange-500 hover:border-solid"
            >
              <img src={trashIcon} alt="trashIcon" className="w-6 h-6" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: productData })}
              className="bg-orange-500 text-white w-full rounded-lg px-8 py-2 ml-2 font-lg my-4 transition-all ease-in-out duration-500 hover:bg-orange-600 hover:border-2 hover:border-orange-500 hover:border-solid"
            >
              <img src={minusIcon} alt="minisIcon" className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    );
};
export default Products;