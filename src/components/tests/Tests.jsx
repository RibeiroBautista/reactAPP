/* import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom';

function Tests() {

    const [productos, setProductos] = useState({});

    useEffect(()=>{
        const db = getFirestore();
        const monitoresRef = doc(db, "productos", '1c71G2bEfFEev8lzar67')

        getDoc(monitoresRef).then((res)=>{
            setProductos({ id: res.id, ...res.data()});
            console.log(productos)
        })
    }, [productos])

    return (
        <>
            {productos.id? (
                <div className='algo'>
                <div className='cont-img'>
                    <div className='images'><img src={productos.img} width='300px' height='300px'/></div>
                </div>
                <div className='cont-info'>
                    <div>{productos.nombre}</div>
                    <div>{productos.precio}</div>
                    <div>{productos.popularidad}</div>
                    <div>{productos.categoria}</div>
                </div>
                <Link to='/testFormulario'>Seguir Comprando</Link>
            </div>
            ) : (
                'loading...'
            )}
        </>
    )
}

export default Tests */