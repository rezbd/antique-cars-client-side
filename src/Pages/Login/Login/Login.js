import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="row px-2">
            <div className="col-12 col-md-4 mx-auto">
                <h2 className="my-5">Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100 d-block my-4" variant="primary" type="submit">
                        Submit
                    </Button>
                    <NavLink
                        to="/register">
                        <Button style={{ textDecoration: 'none' }} variant="link">Need an account? Please Register</Button>
                    </NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Login;