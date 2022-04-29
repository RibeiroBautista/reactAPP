import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/items/ItemListContainer" 
import AboutUs from "./components/items/AboutUs";
import CartContextProvider from "./components/items/CartContext";
import Cart from "./components/items/Cart";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
/* import Tests from "./components/tests/Tests"; */

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <CartContextProvider> 
      <BrowserRouter>
        <NavBar count={count}/>
          <Routes>
            {/* //<Route path="/" element={<Tests/>}/> */}
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer setCount={setCount}/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wakame/aboutus" element={<AboutUs/>}/> 
          </Routes>
      </BrowserRouter> 
    </CartContextProvider>  
  );
}


