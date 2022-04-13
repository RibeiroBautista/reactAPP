import React, { useState } from "react";

export default function ItemCount({stock, setCount}) {

    const  [counter, setCounter] = useState(0);

    function agregar () {
            if(counter < stock) {
                setCounter(counter + 1)
            }
    }
    function restar () {
            if(counter > 0) {
            setCounter(counter - 1)
        }
    }
    function onAdd () {
        setCount(counter);
        setCounter(0);
    }


    return (

        <> 
            <div className="btns-container">
            <button onClick={onAdd}>Agregar al Carrito</button>
                <div className="txt-btns">
                    <button onClick={agregar}>+</button>
                    <span>{counter}</span>
                    <button onClick={restar}>-</button>
                </div>
            </div>

        </>
    
    );
}