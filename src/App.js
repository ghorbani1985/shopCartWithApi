import React from 'react';
//Context
import ProductContextProvider from './context/ProductContextProvider';
//Components
import Shop from './Components/Shop';
function App() {
  return (
    <>
      <div
        className="w-full bg-slate-800 flex justify-center items-center p-4">
       <ProductContextProvider>
       <Shop />
       </ProductContextProvider>
      </div>
    </>
  );
};

export default App;