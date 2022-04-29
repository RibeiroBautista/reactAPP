import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail';
import { CartContext } from "./CartContext";
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetailContainer({setCount}) {
    const [producto, setProducto] = useState({})
    const { loading, setLoading} = useContext(CartContext)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const productoRef = doc(db, "productos", id)
        console.log(id, productoRef)
        getDoc(productoRef).then((res)=>{
            console.log(res.data(), 'data')
            setProducto({ ...res.data(), id: res.id});
            setLoading(false)
        })
        
    }, [id])

    return (
        <>
        {loading ? (
            <h1>Cargando Producto, Por Favor Espera...<Spinner animation="border" variant="primary" /></h1>
        ) : (
            <div>
                <ItemDetail producto={producto} setCount={setCount}/>
            </div>
            )}
        </>
    )

}
