import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
//Components
import Shop from "./Components/Shop";
import SingleProduct from "./Components/SingleProduct";
import CartContextProvider from './context/CartContextProvider';
import Navbar from "./Components/shared/Navbar";
import ShopCart from "./Components/ShopCart";
function App() {
  return (
    <>
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center">
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/*" element={<Navigate to="/shop" />} />
            </Routes>
          </CartContextProvider>
        </ProductContextProvider>
      </div>
    </>
  );
}

export default App;
