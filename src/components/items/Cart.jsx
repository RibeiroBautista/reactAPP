import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {

    const { cart, buyAll, removeFromCart } = useContext(CartContext)

    return (
        <>
            <div className='ContCart'>
                <Link to='/'><button>Seguir Comprando</button></Link>
                <h2>Productos Seleccionados: {cart.length}</h2>
            {cart.length > 0 &&
            cart.map((detail) => (
                <div className='algo'>
                    <div className='cont-img'>
                        <div className='images'><img src={detail.imagen} alt="Tv-Smart 50'" width='300px' height='300px'/></div>
                    </div>
                    <div className='cont-info'>
                        <div>{detail.nombre}</div>
                        <div>{detail.popularidad}: De Popularidad</div>
                        <div>{detail.precio} x {detail.count}</div>
                        <div>{detail.count} Productos Agregados</div>
                        <div>{detail.stock} Productos Disponibles</div>
                        <button onClick={()=>removeFromCart(detail.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <button onClick={buyAll}>Comprar Todo</button>
            </div>
        
        </>
    )}

export default Cart;