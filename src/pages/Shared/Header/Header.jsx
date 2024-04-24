import React, { useContext } from 'react';
import moment from 'moment';

import logo from '../../../assets/logo.png'
import { Button, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';

import Marquee from "react-fast-marquee";




const Header = () => {

  

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-dark rounded'>
                <Button variant="warning">Latest</Button>{' '}

                <Marquee className='text-white' speed={70}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>






        </Container>
    );
};

export default Header;