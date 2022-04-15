import React, { useEffect, useState } from "react";
import { traerProductos } from "../utils/productos";
import { useParams } from "react-router-dom";

import customFetch from "../utils/customFetch";

import c from '../items/css/ItemListContainer.module.css';
import ItemList from "./ItemList";
import Spinner from 'react-bootstrap/Spinner'

export default function ItemListContainer({setCount}) {

    const [items, setItems] = useState([]);
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);
        traerProductos(categoryId)
            .then((res) => setProductos(res))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            });
    }, [categoryId])

    useEffect(() => {
        setLoading(true);
        customFetch(2000, items)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])

    return (
        <> 
            {loading ? (
                <h1>Cargando Productos, Por Favor Espera...<Spinner animation="border" variant="primary" /></h1>
            ) : (
                <div className={c.ItmLstCont}>
                    <ItemList productos={productos} setCount={setCount} />
                </div>
            )}
        </>    
    );

}