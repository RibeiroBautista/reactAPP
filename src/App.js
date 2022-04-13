import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/items/ItemListContainer" 
import Accordeon from "./components/Accordeon"; 
import ItemDetailContainer from "./components/items/ItemDetailContainer";
//import Tests from "./components/tests/Tests";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <BrowserRouter>
        <NavBar count={count}/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer setCount={setCount}/>} />
            <Route exact path="/category/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/" element={<Accordeon/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter> 
    </>  
  );
}


