import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import ItemList from "./ItemList";
import c from '../items/ItemListContainer.module.css';
import Accordeon from "../Accordeon";
//import { Link } from "react-router-dom";

export default function ItemListContainer({setCount}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        customFetch(2000, productos)
        .then(resultado => 
            setItems(resultado))
        .catch(error => 
            console.log(error));

    }, [items])

    return (
        <> 
            <div className={c.Accordeon}>
                <Accordeon />
            </div>
            <div className={c.ItmLstCont}>
                <ItemList productos={items} setCount={setCount} />
            </div>

        </>    
    );

}