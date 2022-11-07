import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import shopIcon from '../../assets/images/svg/shop.svg';
const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
      <div className="w-full bg-white shadow-lg">
        <div className="container flex justify-between items-center p-4">
          <Link to="/shop">Products</Link>
         <div className="flex relative">
          <Link to="/Cart">
            <img src={shopIcon} alt="shop" className="w-6 h-6" />
          </Link>
          <span className="absolute -top-2 -right-3 rounded-full w-5 h-5 flex justify-center items-center bg-red-500 text-white text-sm">{state.itemsCounter}</span>
         </div>
        </div>
      </div>
    );
}

export default Navbar;