import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

export default function Accordeon() {

    return (

        <> 

            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Acordeon con Texto #1</Accordion.Header>
                        <Accordion.Body>
                        Hola y espero esté todo bien por ahí! No soy muy fan del bootstrap y la verdad no me llevo bien con él, porque no me gusta trabajar de esta manera... me hace sentir muy incómodo. Pero no quiere decir que sea lo peor, simplemente no me agrada y ya. Si te fijas bien en la parte de la URL " http://localhost:3000/#home " el " #home " va cambiando cuando haces click en cualquier otro boton del NavBar. eso para que ya quede configurado para cuando haga las demás páginas.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Acordeon con Texto #2</Accordion.Header>
                        <Accordion.Body>
                        Pero como el desafío pide tener una librería para estar aprobado, no me quedó de otra que ser amigo por un tiempo de bootstrap. Asique... espero que te guste este poco contenido que hice... si lees esto mandame por mensaje privado en coder, si te gustaría o no te gustaría que siga utilizando bootstrap... Podría hacer ese sacrificio... O no?... Por cierto no entiendo el por qué el NavBar quedó del lado derecho un poquito hacia la derecha
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </>
    
    );
}
