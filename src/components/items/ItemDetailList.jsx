import React from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailList( { Details } ) {
    return (
        Details.map(d => (
            <ItemDetail
            key={d.id}
            imagen={d.imagen}
            nombre={d.nombre}
            precio={d.precio}
            popularidad={d.popularidad}/>

        ))
    )
}

export default ItemDetailList