import React, { useState } from "react";

export default function ItemCount({stock}) {

    const  [count, setCount] = useState(0);

    function agregar () {
            if(count < stock) {
                setCount(count + 1)
            }
    }
    function restar () {
            if(count > 0) {
            setCount(count - 1)
        }
    }
    function onAdd () {
        setCount(` agregaste ${count} a tu carrito `)
    }

    function details () {
        
    }
    return (

        <> 
            <div className="btns-container">
            <button onClick={onAdd}>Agregar al Carrito</button>
                <div className="txt-btns">
                    <button onClick={agregar}>+</button>
                    <span>{count}</span>
                    <button onClick={restar}>-</button>
                </div>
                    <button onClick={details}>Ver Detalles</button>
            </div>

        </>
    
    );
}