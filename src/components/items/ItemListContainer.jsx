import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import ItemList from "./ItemList";
import c from '../items/ItemListContainer.module.css';



export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])
    return (
        <> 
            <div className={c.ItmLstCont}>
                <ItemList productos={items}/>
            </div>
        </>    
    );
}