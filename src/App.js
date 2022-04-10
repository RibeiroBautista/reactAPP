import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/items/ItemListContainer" 
import Accordeon from "./components/Accordeon"; 
import ItemDetailContainer from "./components/items/ItemDetailContainer";
//import Tests from "./components/tests/Tests";

export default function App() {
  
  function details () {
        
  }

  return (

    <> 
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/" element={<Accordeon/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        
      </BrowserRouter>
      
    </>
    
  );
}


