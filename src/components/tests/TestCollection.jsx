/* import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom';

function TestCollection() {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const monitoresRef = collection(db, "productos")

        getDocs(monitoresRef)
                .then((res)=>{
                    setProductos(res.docs.map((item) => ({id: item.id, ...item.data()})));
                });
    }, []);

    return (
        <>
        {productos.length > 0 &&
                    productos.map((detail) => (
                        <div className='algo'>
                            <div className='cont-img'>
                                <div className='images'><img src={detail.img} alt={detail.nombre} width='300px' height='300px'/></div>
                            </div>
                            <div className='cont-info'>
                                <div>{detail.nombre}</div>
                                <Link to={`/item/${detail.id}`}>ver Detalles</Link>
                            </div>
                        </div>
                        ))}
            
        </>
    )
}

export default TestCollection */