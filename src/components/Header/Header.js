import React from 'react';
import './Header.css';
import {Container,Nav,Navbar,Button,} from 'react-bootstrap';


const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#Howitsworks">How its works</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#Howitsworks">How its works</Nav.Link>
            <Nav.Link href="#Community">Community</Nav.Link>
          
          </Nav>
        
          
        </Navbar.Collapse>
        <div><Button className="custom-btn">Custom Button</Button></div>

      </Container>
    </Navbar>
  )
}

export default Header
