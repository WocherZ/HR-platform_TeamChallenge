import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {isAuth} from "../api/Api";
import "./css/Navigation.css"

const Navigation = () => {
    const [active, setActive] = useState(-1)
    return (
        <Navbar collapseOnSelect expand="md">
            <Container fluid>
                <Navbar.Brand style={{marginLeft: 20}} href="/">MATCHR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link active={active == 0} onClick={e => setActive(0)} as={Link} to={"/"}>О платформе</Nav.Link>
                        <Nav.Link active={active == 1} onClick={e => setActive(1)} as={Link} to="/search">Поиск</Nav.Link>
                        {isAuth() && <Nav.Link active={active == 2} onClick={e => setActive(2)} as={Link} to="/profile">Профиль</Nav.Link>}
                        {isAuth() && <Nav.Link active={active == 3} onClick={e => setActive(3)} as={Link} to="/matches">Мэтчи</Nav.Link>}
                        <Nav.Link active={active == 4} onClick={e => setActive(4)} as={Link} to="/profile_hr">HR</Nav.Link>
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