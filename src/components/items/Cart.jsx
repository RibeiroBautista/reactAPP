import React, { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {

    const { cart, removeFromCart, totalPrice } = useContext(CartContext)
    const [ orderId, setOrderId ] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const terminarCompra = () => {
        const order = {
            buyer: {name, phone, email},
            items: [...cart],
            total: `$ ${totalPrice}`
        };
        const db = getFirestore();
        const ventasRef = collection(db, 'ventas');
        addDoc(ventasRef, order).then(({id})=> setOrderId(id))
    }

    return (
        <>
        {cart.length === 0 
            ?
/* ------------------------------------------------------------------------------------------------------------------------------- */
            <div className='ContCart'>
                <h1>The Cart Is Empty</h1>
                <Link to='/'><button>Continue Buying</button></Link> 
            </div>
/* ------------------------------------------------------------------------------------------------------------------------------- */
            : 
/* ------------------------------------------------------------------------------------------------------------------------------- */
                <div className='ContCart'>
                    <h2>Aggregates Products : {cart.length}</h2>
                    {cart.length > 0 &&
                    cart.map((detail) => (
                        <div className='algo'>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='cont-img'>
                                <div className='images'><img src={detail.img} alt={detail.nombre} width='300px' height='300px'/></div>
                            </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='cont-info'>
                                <div><p>Stock: {detail.stock} Products Available</p></div>
                                <div><p>{detail.nombre}</p></div>
                                <div><p>Price: {detail.precio}</p></div>
                                <div><p>{detail.count} Products Added</p></div>
                                <button onClick={()=>{removeFromCart(detail.id)}}>Remove</button>
                            </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                        </div>
                        ))}
                        <div className='contanier-form'>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='inputs'>
                                <p>Type Your Name/Surname/Second-Name Here</p>
                                <input type={'text'} value={name} onChange={(e)=>{setName(e.currentTarget.value);}}/>
                                <p>Type Your Phone Number Here</p>
                                <input type={'text'} value={phone} onChange={(e)=>{setPhone(e.currentTarget.value);}}/>
                                <p>Type Your Email Here</p>
                                <input type={'text'} value={email} onChange={(e)=>{setEmail(e.currentTarget.value);}}/>
                            </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='order'>
                                <h2>Total Price: $ {totalPrice}</h2>
                                <button onClick={()=>{
                                    terminarCompra()
                                }}>Finalize Purchase</button>
                                <p>Your Order Number: {orderId}</p>
                            </div>
                        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                        <Link to='/'>
                            <button>Continue Buying</button>
                        </Link> 
                </div>
/* ----------------------------------------------------------------------------------------------------------------------------- */
}</>)}

export default Cart;