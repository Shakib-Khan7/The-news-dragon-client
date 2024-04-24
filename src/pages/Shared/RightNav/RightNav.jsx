import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import { FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login with</h3>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle>  Log in with google</Button>{' '}

            <Button variant="outline-secondary"> <FaGithub></FaGithub> Log in with GitHub</Button>{' '}

            <div>
                <h4 className='mt-4'>Find us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter>Twiter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>

            <div>
                <img src={bg} alt="" />
            </div>




        </div>
    );
};

export default RightNav;