import React from 'react'
import { Container,Nav } from 'react-bootstrap'

const Explore = () => {
  return (
    <div>
      <Container>
         <div className='explore'>
            <h1 className=''>Explore</h1>
         </div>
         <div className='explore'>
            <Nav className="explore-header">
                <Nav.Link href="#">All</Nav.Link>
                <Nav.Link href="#">Art</Nav.Link>
                <Nav.Link href="#">Photograhpy</Nav.Link>
                <Nav.Link href="#">Game</Nav.Link>
                <Nav.Link href="#">Musics</Nav.Link>
                <Nav.Link href="#">Domain</Nav.Link>
                <Nav.Link href="#">Memes</Nav.Link>
                <Nav.Link href="#">Filters</Nav.Link>
            </Nav>
         </div>
      </Container>
      
    </div>
  )
}

export default Explore
