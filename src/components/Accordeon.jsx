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
                        En fin, en el After del viernes pasado vimos del como resolver los desafios y que hay que crear para que cumpla con las condiciones del entregable. y hasta el momento hice lo que me salió o lo que a mí me pareció que le faltaba pero dentro de todo no le faltaba casi nada jaja. Sé que este desafío "contador con boton" no debe de incluir el item todavía pero tranquilamente se puede charlar con el tema de entregas pero al fin y al cabo es lo mismo, porque terminaría entregando en el desafío número 5 este mismo trabajo.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </>
    
    );
}
