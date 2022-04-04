import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount'
import s from '../items/CardBodyClass.module.css';

function Item({id, nombre, precio, imagen}) {
    return (
        <Card key={id} style={{ width: '18rem' }} >
            <Card.Img variant="top" src={imagen} width={300} height={300} />
            <Card.Body>
                <div className={s.cardBodyClass}>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                    <ItemCount stock={12} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item