import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';



function Menu(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" > Planetoid </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="PictureOfTheDay">Astronomy Picture of the Day</Nav.Link>
            <Nav.Link href="SearchEngine">Space Search Engine</Nav.Link>
            {/* <NavDropdown title="Images galery" id="basic-nav-dropdown">
              <NavDropdown.Item href="MarsPhotos">Mars pictures</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Menu;