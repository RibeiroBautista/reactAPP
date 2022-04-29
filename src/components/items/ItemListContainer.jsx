import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

import c from '../items/css/ItemListContainer.module.css';
import ItemList from "./ItemList";
import { CartContext } from "./CartContext";
import Spinner from 'react-bootstrap/Spinner'

export default function ItemListContainer({setCount}) {

    const [productos, setProductos] = useState([])
    const { id } = useParams();
    const { loading, setLoading } = useContext(CartContext);

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        
        let productosRef;
        if(!id){
            productosRef = collection(db, "productos")
        }else {
            productosRef = query(collection(db, "productos"), where('categoria', '==', id))
        }
        
        getDocs(productosRef)
        .then((res)=>{
            setProductos(res.docs.map((item) => ({ ...item.data(), id: item.id})));
            setLoading(false)
        });
        
    }, [id])

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
        )
}