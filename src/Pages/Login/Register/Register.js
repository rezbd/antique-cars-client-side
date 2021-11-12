import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <div className="row px-2">
            <div className="col-12 col-md-4 mx-auto">
                <h2 className="my-5">Register</h2>
                {!isLoading && < Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleOnChange} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={handleOnChange} name="password2" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className="w-100 d-block my-4" variant="primary" type="submit">
                        Register
                    </Button>
                    <NavLink
                        to="/login">
                        <Button style={{ textDecoration: 'none' }} variant="link">New User? Please Login</Button>
                    </NavLink>
                </Form>}
                {isLoading && <Spinner animation="border" />}
            </div>
        </div >
    );
};

export default Register;