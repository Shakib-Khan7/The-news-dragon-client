import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light'
                variant='light' className="bg-body-tertiary">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link to='/'>Home</Link>

                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Career">Career</Nav.Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                            }

                            {user ?
                                <Button variant="info">Logut</Button> :
                                <Link to='/login'><Button variant="info">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;