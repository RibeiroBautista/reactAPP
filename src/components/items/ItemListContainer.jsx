import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

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
        
        let productsRef;
        if(!id){
            productsRef = collection(db, "productos")
        }else {
            productsRef = query(collection(db, "productos"), where('categoria', '==', id))
        }
        
        getDocs(productsRef)
        .then((res)=>{
            setProductos(res.docs.map((item) => ({ ...item.data(), id: item.id})));
            setLoading(false)
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
        {loading ? (
            <div className="loading-background">
                <h1>Loading Products, Please Wait...<Spinner animation="border" variant="primary" /></h1>
            </div>
        ) : (
            <div>
                <div className='ItmLstCont'>
                    <ItemList productos={productos} setCount={setCount} />
                </div>
            </div>
            )}
        </>
        )
}