import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return (
        <div className='box container text-center bg-light text-dark'>
            <h1 className='display-4'>Welcome to Planetoid</h1>
            <p class="blockquote text-break">
            Hello and welcome to planetoid!! Planetoid is a web platform that connects you to space !!
            I created this platform to be my web development portfolio, but it turned out so cool that I even put it in the clouds lol.
            if you are here to see the photos and other tools that my site offers, enjoy it a lot!! If you are a recruiter... please hire me!!!
            to know the frameworks and libraries that I used to develop this application click on the button that says: resources
            if you want to contact me for hiring click on: hire me
            </p>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
      </Offcanvas>
            </div>

    );
}

