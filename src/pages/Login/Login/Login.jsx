import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h3>Plaease Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                



                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className='text-secondary'> Dont have an account?
                    <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;