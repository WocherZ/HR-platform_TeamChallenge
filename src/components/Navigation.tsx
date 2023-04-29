import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {isAuth} from "../api/Api";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand style={{marginLeft: 20}} href="#home">MATCHR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>О платформе</Nav.Link>
                        <Nav.Link as={Link} to="/search">Вакансии</Nav.Link>
                        {isAuth() && <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>}
                    </Nav>
                    <Nav>
                        {isAuth()
                        ?<Nav.Link as={Link} to="/logout">Выход</Nav.Link>
                        :<Nav.Link as={Link} to="/login">Вход</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;