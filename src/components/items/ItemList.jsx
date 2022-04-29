import React from 'react'
import Item from './Item'


function ItemList( { productos, setCount } ) {
    return (
        productos.map(p => (
            <Item
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            imagen={p.img}
            setCount={setCount}
            />
        ))
    )
}

export default ItemList