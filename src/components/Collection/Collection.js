import React from 'react';
import './Collection.css';
import {Card, Col,Container} from 'react-bootstrap';
import { collectionData } from '../CardData/collectionData';

const Collection = () => {
  return (
    <div className='collections'>
        <Container>
            <div className='bid_flex'>
                <span className='bid_title'>Hot Collections</span>
                <span className='bid_title'>View all</span>
            </div>
            <div className='row collection'>
               {collectionData.map((collection) => (
                 <Col lg={3}>
                    <Card className='card-collection'>
                        <Card.Img variant="top" src={collection.image} />
                        <Card.Body>
                            <Card.Title className='collection-name'>{collection.title}</Card.Title>
                            <Card.Text className='collection-text mb-2 text-muted'>{collection.details}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            
            </div>
        </Container>
    </div>
  )
}

export default Collection
