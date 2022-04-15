import React from "react";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton'

export default function NavBar({count}) {

    return (
        <> 
            <div>

                <Navbar>
                    <Container>

                        <Link to="/"> <Navbar.Brand href="#home"><Button variant="outline-warning">Wakame'73</Button></Navbar.Brand></Link>

                        <Nav className="justify-content-end align-items-center">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Categorías
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">

                                    <Dropdown.Item >
                                    <Link to="/category/sillas">
                                        <Button variant="secondary">sillas</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item >
                                    <Link to="/category/mesas">
                                        <Button variant="secondary">mesas</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item >
                                    <Link to="/category/gabinetes">
                                        <Button variant="secondary">gabinetes</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item >
                                    <Link to="/category/monitores">
                                        <Button variant="secondary">monitores</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item variant="dark">
                                    <Link to="/category/electrodomesticos">
                                        <Button variant="secondary">electrodomesticos</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                    <Link style= {{margin: '0px 10px'}} to="/wakame/aboutus">
                                        <Button variant="secondary">Sobre Nosotros</Button>{' '}
                                    </Link>
                                    <Link to="/wakame/contactsus">
                                        <Button variant="secondary">Contactanos</Button>{' '}
                                    </Link>
                                <CartWidget count={count}/>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    
    );
}
