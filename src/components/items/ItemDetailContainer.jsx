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
        getDoc(productoRef).then((res)=>{
            setProducto({ ...res.data(), id: res.id});
            setLoading(false)
        })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
        {loading ? (
            <h1>Loading Product, Please Wait...<Spinner animation="border" variant="primary" /></h1>
        ) : (
            <div>
                <ItemDetail producto={producto} setCount={setCount}/>
            </div>
            )}
        </>
    )

}
