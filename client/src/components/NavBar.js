import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Container>
        </Navbar>

    );
};

export default NavBar;