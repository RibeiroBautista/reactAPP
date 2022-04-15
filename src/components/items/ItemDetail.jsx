import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount'
import s from '../items/css/CardBodyClass.module.css';

const ItemDetail = ({detail, setCount}) => {
    const  { id, nombre, precio, popularidad, imagen } = detail;
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
                    </div>
                        <ItemCount stock={12} setCount={setCount}/>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ItemDetail;