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
                        Hola y espero esté todo bien por ahí! Espero leas esto ya que aquí aparecera info del por qué tardé tanto en entregarlo, y es que, tuve una semana muy loca con respecto a la vida amorosa y no estaba tan de humor para codear y mi cabeza estaba en la luna al momento de hacerlo. Asique... pido perdón por haber tardado tanto. abrir Acordeon con texto #2 para seguir leyendo. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Acordeon con Texto #2</Accordion.Header>
                        <Accordion.Body>
                        En fin, se agregaron 3 cosas nuevas que son los 'tests' que son mas que nada para probar cosas durante la clase y luego seguir con el proyecto.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </>
    
    );
}
