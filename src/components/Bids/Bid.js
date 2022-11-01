import React from 'react';
import './Bid.css';
import { bidData } from '../CardData/bidData';
import {Card, Col,Container} from 'react-bootstrap';

const Bid = () => {
  return (
    <div className='Bids'>
      <Container>
            <div className='bid_flex'>
                <span className='bid_title'>Hot Bids</span>
                <span className='bid_title'>View all</span>
            </div>
            <div className='row'>
              {bidData.map((bid) => (
                  <Col lg={3}>
                        <Card className='card-bid'>
                          <Card.Img variant="top" src={bid.image} />
                            <Card.Body>
                                <Card.Title className='bid-name'>{bid.name}</Card.Title>
                                <Card.Text className='bid-text mb-2 text-muted'>{bid.title}</Card.Text>
                                <Card.Text>{bid.footer}</Card.Text>
                          </Card.Body>
                        </Card>
                  </Col>
                ))}
           </div>
     </Container>
       </div>
  )
}

export default Bid
