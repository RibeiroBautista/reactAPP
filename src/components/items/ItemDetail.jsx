import React, {useContext, useState} from "react";
import { CartContext } from "./CartContext";
/* ---------------------------------------------------- */
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ producto }) => {
    const  { stock, nombre, precio, popularidad, img } = producto;

    let [count, setCount] = useState(1);
    const {addToCart, totalPrice } = useContext(CartContext)

    const agregar = () => {
            if(count < stock) {
                setCount(count + 1)
            }
    }
    const restar = () => {
            if(count > 1) {
            setCount(count - 1)
        }
    }
    const onAdd = () => {
        setCount(count);
        setCount(1);
    }

    return (
        <>
        <div className='MoveCard'>
{/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className='CardContainer'>
                <Card.Img variant="top" src={img} width={'300px'} height={'450px'} />
                <Card.Body className='cardBodyClass'>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                    <div>
                        <Card.Title><p>Product: {nombre}</p></Card.Title>
                        <Card.Title><p>Price: $ {precio}</p></Card.Title>
                        <Card.Title><p>Popularity: {popularidad}</p></Card.Title>
                        <Card.Title><p>Stock Available: {stock}</p></Card.Title>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                    <div className='txt-btns'>
                        <button onClick={agregar}>+</button>
                        <span>{count}</span>
                        <button onClick={restar}>-</button>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                    <div className='btns-container'>
                        <button onClick={()=> {
                            onAdd()
                            addToCart({...producto, count, totalPrice})
                        }}>Add To Cart</button>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                </Card.Body>
            </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
        </div>
        </>
)}

export default ItemDetail;