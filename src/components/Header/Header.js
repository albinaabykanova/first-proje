import React from 'react';
import './Header.css';
import Logo from '../img/logo.png';
import {Container,Nav,Navbar} from 'react-bootstrap';


const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container >
      <img src={Logo} alt="" className="logo"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">How its works</Nav.Link>
            <Nav.Link href="#action2">Community</Nav.Link>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">How its works</Nav.Link>
            <Nav.Link href="#action2">Community</Nav.Link>
          
          </Nav>
          <Nav.Link className='createButton'>Create</Nav.Link>
          <Nav.Link className='connectWallet'>Connect Wallet</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
