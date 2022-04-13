import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, productos)
            .then(resultado => {
                const productDetail = resultado.find(producto => producto.id === id);
                setDetail(productDetail);
            })
            .catch(error =>
                console.log(error));
    }, [id])

    return (
        <>
            <ItemDetail detail={detail}/>
        </>
    )

}
