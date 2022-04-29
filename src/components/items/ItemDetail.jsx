import React, {useContext, useState} from "react";
import { CartContext } from "./CartContext";
/* ---------------------------------------------------- */
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../items/css/CardBodyClass.module.css';

const ItemDetail = ({ producto }) => {
    const  { id, stock, nombre, precio, popularidad, img } = producto;

    let [count, setCount] = useState(1);
    const {addToCart} = useContext(CartContext)
    const { setEmpty } = useContext(CartContext)

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
        setCount(0);
        setEmpty(false)
    }

    return (
        <>
        <div className={s.MoveCard}>
            <Card key={id} className={s.CardContainer}>
                <Card.Img variant="top" src={img} width={'300px'} height={'450px'} />
                <Card.Body className={s.cardBodyClass}>
                    <div>
                        <Card.Title><p>Producto: {nombre}</p></Card.Title>
                        <Card.Title><p>Precio: {precio}</p></Card.Title>
                        <Card.Title><p>Popularidad: {popularidad}</p></Card.Title>
                        <Card.Title><p>Stock Disponible: {stock}</p></Card.Title>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
                    <div className="btns-container">
                    <button onClick={()=> {
                        onAdd()
                        addToCart({...producto, count})
                    }}
                    >Agregar al Carrito
                    </button>

                        <div className="txt-btns">
                            <button onClick={agregar}>+</button>
                            <span>{count}</span>
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