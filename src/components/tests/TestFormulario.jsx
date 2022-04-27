import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../items/CartContext';

export default function TestFormulario() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const {cart, total} = useContext(CartContext)

    function terminarCompra() {

        const buyer = {
            buyer: {name, phone, email},
            items: cart,
            total: 1000
        };


    }

    useEffect(() => {
        console.log(name, email, phone);
    }, [name, email, phone]);

    return (

    <>
        <input type={'text'} value={name} onChange={(e)=>{setName(e.currentTarget.value);}}/>
        <input type={'text'} value={email} onChange={(e)=>{setEmail(e.currentTarget.value);}}/>
        <input type={'text'} value={phone} onChange={(e)=>{setPhone(e.currentTarget.value);}}/>

        <button onClick={terminarCompra}>Terminar Compra</button>
    </>
    );
}