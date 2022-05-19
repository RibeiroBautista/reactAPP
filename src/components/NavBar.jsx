import React from "react";
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton'

export default function NavBar({count}) {

return (
        <> 
            <div className="NavBar-Nav">
                <Navbar>
                    <Container>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                        <Link to="/">
                            <Navbar.Brand href="#home">
                                <Button variant="outline-warning">Wakame'73</Button>
                            </Navbar.Brand>
                        </Link>
                        <Nav className="justify-content-end align-items-center">
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                            <Dropdown>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-warning">
                                    Categories
                                </Dropdown.Toggle>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                <Dropdown.Menu variant="dark">
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Dropdown.Item >
                                    <Link to="/categoria/sillas">
                                        <Button variant="outline-warning">Chairs</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Dropdown.Item >
                                    <Link to="/categoria/mesas">
                                        <Button variant="outline-warning">Tables</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Dropdown.Item >
                                    <Link to="/categoria/gabinetes">
                                        <Button variant="outline-warning">Cabinets</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Dropdown.Item >
                                    <Link to="/categoria/monitores">
                                        <Button variant="outline-warning">Monitors</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Dropdown.Item variant="dark">
                                    <Link to="/categoria/electrodomesticos">
                                        <Button variant="outline-warning">Electrical Appliances</Button>{' '}
                                    </Link>
                                    </Dropdown.Item>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                </Dropdown.Menu>
                            </Dropdown>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Link style= {{margin: '0px 10px'}} to="/wakame/aboutus">
                                        <Button variant="outline-warning">About Us</Button>{' '}
                                    </Link>
                                <CartWidget count={count}/>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    
)}

