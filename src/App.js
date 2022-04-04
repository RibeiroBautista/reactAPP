import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Accordeon from "./components/Accordeon";
import ItemListContainer from "./components/items/ItemListContainer";

export default function App() {
  
  return (

    <> 
      <NavBar />
      <Accordeon />
      <ItemListContainer />
    </>
    
  );
}


