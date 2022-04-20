import React, {useContext, useState} from "react";
import { CartContext } from "./CartContext";
/* ---------------------------------------------------- */
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../items/css/CardBodyClass.module.css';
import productos from "../utils/productos";


const ItemDetail = ({detail, setCart}) => {
    const  { id, stock, nombre, precio, popularidad, imagen } = detail;

    let [counter, setCounter] = useState(0);
    const {addToCart} = useContext(CartContext)
    const {addedToCart} = useContext(CartContext)
    const {added} = useContext(CartContext)

    const agregar = () => {
            if(counter < stock) {
                setCounter(counter + 1)
            }
    }
    const restar = () => {
            if(counter > 0) {
            setCounter(counter - 1)
        }
    }
    const onAdd = () => {
        setCounter(counter);
        setCounter(0);
    }

    return (
        <>
        <div className={s.MoveCard}>
            <Card key={id} className={s.CardContainer}>
                <Card.Img variant="top" src={imagen} width={'300px'} height={'450px'} />
                <Card.Body>
                    <div className={s.cardBodyClass}>
                        <Card.Title><p>Producto: {nombre}</p></Card.Title>
                        <Card.Title><p>Precio: {precio}</p></Card.Title>
                        <Card.Title><p>Popularidad: {popularidad}</p></Card.Title>
                        <Card.Title><p>Stock Disponible: {stock}</p></Card.Title>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                    <div className="btns-container">
                    <button onClick={()=> {
                        counter={counter}
                        onAdd()
                        added()
                        addToCart(...productos, counter)
                        console.log(addedToCart)
                    }}
                    >Agregar al Carrito
                    </button>

                        <div className="txt-btns">
                            <button onClick={agregar}>+</button>
                            <span>{counter}</span>
                            <button onClick={restar}>-</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ItemDetail;