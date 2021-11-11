import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="row px-2">
            <div className="col-12 col-md-4 mx-auto">
                <h2 className="my-5">Register</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className="w-100 d-block my-4" variant="primary" type="submit">
                        Submit
                    </Button>
                    <NavLink
                        to="/login">
                        <Button style={{ textDecoration: 'none' }} variant="link">Have an account? Please Login</Button>
                    </NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Register;