import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../items/CardBodyClass.module.css';

const ItemDetail = ( { id, nombre, precio, popularidad, imagen } ) => {
    
    return (
        <>
            <Card key={id} style={{ width: '18rem' }} >
            <Card.Img variant="top" src={imagen} width={300} height={300} />
            <Card.Body>
                <div className={s.cardBodyClass}>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Title>{precio}</Card.Title>
                    <Card.Title>{popularidad}</Card.Title>
                </div>
            </Card.Body>
        </Card>
        </>
    )

}

export default ItemDetail;