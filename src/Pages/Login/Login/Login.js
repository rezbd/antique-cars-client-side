import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <section className="container">
            <div className="row px-2 pb-4 mb-2">
                <div className="col-12 col-md-4 mx-auto">
                    <h2 className="my-5">Please Login</h2>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleOnChange} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="w-100 d-block my-4" variant="primary" type="submit">
                            Login
                        </Button>
                        <NavLink
                            to="/register">
                            <Button style={{ textDecoration: 'none' }} variant="link">Need an account? Please Register</Button>
                        </NavLink>

                    </Form>
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">Congratulations! Logged In successfully</Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert>}
                </div>
            </div>
        </section>
    );
};

export default Login;