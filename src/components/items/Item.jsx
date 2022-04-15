import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../items/css/CardBodyClass.module.css';
import { Link } from 'react-router-dom';

function Item( { id, nombre, imagen } ) {
    return (
        <Card key={id} style={{ width: '18rem' }} >
            <Card.Img variant="top" src={imagen} width={300} height={300} />
            <Card.Body>
                <div className={s.cardBodyClass}>
                    <p>{nombre}</p>
                    <Link to={`/item/${id}`}>Ver Detalle</Link>
                </div>
            </Card.Body>
        </Card>

    )

}

export default Item