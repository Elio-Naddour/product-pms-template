import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import pms from 'src/assets/pms-basic.png';
import routeNames from 'src/utils/routeNames';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col md={8}>
          <Card className='text-center shadow'>
            <Card.Body>
              <h1 className='mb-4'>Welcome to Elio PMS</h1>
              <p className='lead'>
                Streamline your product lifecycle, from ideation to market
                delivery. Collaborate, track progress, and ensure product
                success with powerful tools.
              </p>
              <img src={pms} alt='image PMS' className='img-home' />
              <Button
                variant='primary'
                size='lg'
                className='mt-3'
                onClick={() => navigate(routeNames.products)}
              >
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
