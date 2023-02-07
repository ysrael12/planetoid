import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Home() {
    //hire me off canvas
    const [showHire, setShowHire] = useState(false);
    const handleCloseHire = () => setShowHire(false);
    const handleShowHire = () => setShowHire(true);  

    //resource off canvas
    const [showRsc, setShowRsc]= useState(false);
    const handleCloseRsc =() => setShowRsc(false)
    const handleShowRsc = () => setShowRsc(true); 
    

    return (
        <div  className=' box-text container text-center bg-light text-dark'>

            <Card  className="text-center">
                <Card.Header>Welcome to Planetoid</Card.Header>
                    <Card.Body>
                        <Card.Title>About me</Card.Title>
                        <Card.Text>
                        Hello and welcome to planetoid!! Planetoid is a web platform that connects you to space !!
                        I created this platform to be my web development portfolio, but it turned out so cool that I even put it in the clouds lol.
                        if you are here to see the photos and other tools that my site offers, enjoy it a lot!! If you are a recruiter... please hire me!!!
                        to know the frameworks and libraries that I used to develop this application click on the button that says: resources
                        if you want to contact me for hiring click on: hire me
                        </Card.Text>
                        <button onClick={handleShowHire} type="button" class="btn btn-secondary btn-space">Hire me</button>
                        <button onClick={handleShowRsc} type="button" class="btn btn-secondary btn-space">Resources</button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Ysrael Sacrati</Card.Footer>
            </Card>

            <Offcanvas show={showHire} onHide={handleCloseHire}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Hire me</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div> 
                    <h2 className='fs-4'>my linkedin</h2>
                    <a className='text-secondary' href="https://www.linkedin.com/in/ysrael-sacrati/">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2ZvUoDQRSFP1Hs/AFtBQt9A99BwV20FIV0lr6CjQTyID6DnSbqg9gp/iDopkpzZWEaw+zOzFrsHbkHThNuZs+Xu3dmk4DJZOqqI2ACTAHp2VNgDJSpECMF4aXBw5ROiHIXMSATBUEl4LsYkEpBUAn4OwZEMnFQfQcUA5lT2yfyApwAG85nwFuOHdlXtF0H1fbmVU/9Wo4gpae+yBHkHRgAm871jLzmCCKKHFTfAcVA5tSlnSk1j+4s2gKWgRVgD7gEPnIAqQ/Og8C114Eb7SA7MRcHloAHzSAp2gZmOYAsRtRcawa5AJ5d3RNw3lJ7qhXkOPH7965WkPuGNevfCOjwMNobyGfDmvXrPi1oBfnrumIgWEe8slsLmxFs1xL/eNiMiJ0jtG+TmhzUvwGpFISUgL9iQMYKgkrAtzEgpYKgEvAhkRoqCCsNviJRhfv3VMPMVO52iu6EyWTil34AFdRDhxtrT8cAAAAASUVORK5CYII=" alt='linkedin'></img>
                        Ysrael Sacrati</a>
                    </div>
                    
                    <div className='pt-4'> 
                        <h2 className='fs-4'>my skills</h2>
                        <ul className="list-group fs-6">
                            <li className="list-group-item">Javascript</li>
                            <li className="list-group-item">typescript</li>
                            <li className="list-group-item">Python</li>
                            <li className="list-group-item">Sql</li>
                            <li className="list-group-item">React-js</li>
                            <li className="list-group-item">Django</li>
                            <li className="list-group-item">Pandas</li>
                            <li className="list-group-item">Fast-api</li>
                            <li className="list-group-item">Flask</li>
                        </ul>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showRsc} onHide={handleCloseRsc}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Resources</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>    
                    <div className='pt-4'> 
                        <h2 className='fs-4'>programing languages,framework,libraries and apis </h2>
                        <ul className="list-group fs-6">
                            <li className="list-group-item">Javascript</li>
                            <li className="list-group-item">React.js</li>
                            <li className="list-group-item">Nasa-Api</li>
                            <li className="list-group-item">React router dom</li>
                            <li className="list-group-item">bootstrap</li>
                            <li className="list-group-item">Vscode</li>
                        </ul>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
            </div>

    );
}

