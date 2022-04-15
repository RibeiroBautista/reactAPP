import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import productos from "../utils/productos";
import ItemDetail from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetailContainer({setCount}) {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        customFetch(2000, productos)
            .then(resultado => {
                const productDetail = resultado.find(producto => producto.id === id);
                setDetail(productDetail);
            })
            .finally(() => {
                setLoading(false)
            });
            //.catch(error => console.log(error));
    }, [id])

    return (
        <>
            {loading ? (
                <h1>Cargando Producto, Por Favor Espera...<Spinner animation="border" variant="primary" /></h1>
            ) : (
                <div>
                    <ItemDetail detail={detail} setCount={setCount}/>
                </div>
                )}
        </>
    )

}
