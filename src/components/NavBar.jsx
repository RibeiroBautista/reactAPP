import React from "react";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";


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
                            <h4>BR-Commerse</h4>
                            <CartWidget />
                        </Nav>

                    </Container>
                </Navbar>

            </div>

            

        </>
    
    );
}
