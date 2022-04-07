import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Accordeon from "./components/Accordeon";
import ItemListContainer from "./components/items/ItemListContainer"
//import Tests from "./components/tests/Tests";

export default function App() {
  
  return (

    <> 
      {/* //<Tests /> */}
      <NavBar />
      <Accordeon />
      <ItemListContainer />
    </>
    
  );
}


