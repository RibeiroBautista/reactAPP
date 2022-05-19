import React, {useContext, useState} from "react";
import { CartContext } from "./CartContext";
/* ---------------------------------------------------- */
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ producto }) => {
    const  { stock, nombre, precio, popularidad, img, descripcion } = producto;

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
                    <div className="details">
                        <p>Product: <strong>{nombre}</strong></p>
                        <p>Description: <strong>{descripcion}</strong></p>
                        <p>Price: $ <strong>{precio}</strong></p>
                        <p>Popularity: <strong>{popularidad}</strong></p>
                        <p>Stock Available: <strong>{stock}</strong></p>
                        <div className='txt-btns'>
                            <button 
                            onClick={agregar}
                            className='agregar'
                            >+</button>
                            <span>{count}</span>
                            <button 
                            onClick={restar}
                            className='restar'
                            >-</button>
                        </div>
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