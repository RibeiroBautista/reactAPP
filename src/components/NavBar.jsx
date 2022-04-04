import React from "react";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";

export default function NavBar() {

    return (

        <> 
            <div>

                <Navbar>
                    <Container>

                        <Navbar.Brand href="#home"><Button variant="outline-warning">Wakame'73</Button></Navbar.Brand>

                        <Nav className="justify-content-end align-items-center">
                            <Nav.Link href="#Store"><Button variant="outline-primary">Tienda</Button>{' '}</Nav.Link>
                            <Nav.Link href="#Profile"><Button variant="outline-primary">Perfil</Button>{' '}</Nav.Link>
                            <Nav.Link href="#About-Us"><Button variant="outline-primary">Sobre Nosotros</Button>{' '}</Nav.Link>
                            <h5>W73-Commerse</h5>
                            <CartWidget />
                        </Nav>

                    </Container>
                </Navbar>

            </div>
            

            

        </>
    
    );
}
