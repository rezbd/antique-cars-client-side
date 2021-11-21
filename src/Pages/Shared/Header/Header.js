import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="top-header">
            <>
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Antique Cars</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/dashboard">Dashboard</Nav.Link>
                            {
                                user?.email ?
                                    <Button onClick={logout} variant="light" size="sm">Logout</Button>
                                    :
                                    <Nav.Link as={Link} style={{ color: 'white' }} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text className="ms-2">
                                Signed in as: <a style={{ textDecoration: "none", color: "#FFE4C4" }} href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;