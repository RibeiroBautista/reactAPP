import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function NavBar() {

    return (

        <> 
            <div>

                <Navbar>
                    <Container>

                        <Navbar.Brand href="#home"><Button variant="outline-warning">BR-Commerse</Button></Navbar.Brand>

                        <Nav className="justify-content-end">
                            <Nav.Link href="#Store"><Button variant="outline-primary">Tienda</Button>{' '}</Nav.Link>
                            <Nav.Link href="#Profile"><Button variant="outline-primary">Perfil</Button>{' '}</Nav.Link>
                            <Nav.Link href="#About-Us"><Button variant="outline-primary">Sobre Nosotros</Button>{' '}</Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>

            </div>

        </>
    
    );
}
