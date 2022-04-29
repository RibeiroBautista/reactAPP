import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {

    const { cart, removeFromCart, empty, setEmpty } = useContext(CartContext)

    return (
        <>
        {empty === true 
            ?
            <div className='ContCart'>
                <h1>El Carrito está vacío</h1>
                <Link to='/'><button>Seguir Comprando</button></Link> 
            </div>
            : 
                <div className='ContCart'>
                    <h2>Productos Agregados: {cart.length}</h2>
                    {cart.length > 0 &&
                    cart.map((detail) => (
                        <div className='algo'>
                            <div className='cont-img'>
                                <div className='images'><img src={detail.img} alt={detail.nombre} width='300px' height='300px'/></div>
                            </div>
                            <div className='cont-info'>
                                <div>{detail.nombre}</div>
                                <div>Precio: {detail.precio}</div>
                                <div>{detail.count} Productos</div>
                                <div>Stock: {detail.stock} Productos Disponibles</div>
                                <button onClick={()=>removeFromCart(detail.id)}>Remove</button>
                            </div>
                        </div>
                        ))}
            <Link to='/'><button onClick={setEmpty()}>Seguir Comprando</button></Link> 
                </div>}
        </>)
    }

export default Cart;