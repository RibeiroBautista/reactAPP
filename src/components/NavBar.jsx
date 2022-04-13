import React from "react";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function NavBar({count}) {

    return (
        <> 
            <div>

                <Navbar>
                    <Container>

                        <Link to="/"> <Navbar.Brand href="#home"><Button variant="outline-warning">Wakame'73</Button></Navbar.Brand></Link>

                        <Nav className="justify-content-end align-items-center">
                            <Link to="/item/1">
                                <Nav.Link href="#Store">
                                    <Button variant="outline-primary">Tienda</Button>{' '}
                                </Nav.Link>
                            </Link>
                            <Link to="/">
                                <Nav.Link href="#Profile">
                                    <Button variant="outline-primary">Perfil</Button>{' '}
                                </Nav.Link>
                            </Link>
                            <Link to="/">
                                <Nav.Link href="#About-Us">
                                    <Button variant="outline-primary">Sobre Nosotros</Button>{' '}
                                </Nav.Link>
                            </Link>

                            <DropdownButton as={ButtonGroup} title="Categorías" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">electrodomesticos</Dropdown.Item>
                                <Dropdown.Item eventKey="2">muebles</Dropdown.Item>
                            </DropdownButton>

                                <CartWidget count={count}/>
                        </Nav>

                    </Container>
                </Navbar>
            </div>
        </>
    
    );
}
