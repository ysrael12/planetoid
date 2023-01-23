import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
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
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            resources
            </a>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>


    );
}

