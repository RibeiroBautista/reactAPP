import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/items/ItemListContainer" 
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import AboutUs from "./components/items/AboutUs";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <BrowserRouter>
        <NavBar count={count}/>
          <Routes>
            <Route path="/" element={<ItemListContainer setCount={setCount}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer setCount={setCount}/>} />
            <Route path="/wakame/aboutus" element={<AboutUs/>}/>
          </Routes>
      </BrowserRouter> 
    </>  
  );
}


