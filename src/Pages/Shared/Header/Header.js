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
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            {/*  <Nav.Link as={Link} to="/pay">Pay</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/addReview">Add Review</Nav.Link>
                            <Nav.Link as={Link} to="/addProduct">Add A Product</Nav.Link>
                            <Nav.Link as={Link} to="/manageProducts">Manage Products</Nav.Link> */}
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            {/* <Nav.Link as={Link} to="/dashboardTwo">Dashboard Two</Nav.Link> */}
                            {
                                user?.email ?
                                    <Button onClick={logout} variant="light">Logout</Button>
                                    :
                                    <Nav.Link as={Link} style={{ color: 'white' }} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;