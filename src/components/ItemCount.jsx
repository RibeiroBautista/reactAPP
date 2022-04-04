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

    return (

        <> 
            <div className="btns-container">
                <div className="txt-btns">
                    <button onClick={agregar}>+</button>
                    <span>{count}</span>
                    <button onClick={restar}>-</button>
                    <button onClick={onAdd}>Add to Cart</button>
                </div>
            </div>

        </>
    
    );
}