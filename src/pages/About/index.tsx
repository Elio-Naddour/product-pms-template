import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col md={10} lg={8}>
          <Card className='text-center shadow-lg'>
            <Card.Body>
              <h1 className='mb-4'>About This Application</h1>
              <p className='lead'>
                This application is a Product Management System (PMS) designed
                as a training template for the team at <strong>NetWays</strong>.
                It provides a robust framework to manage products.
              </p>
              <p>
                With this system, you can create, read, update, and delete product
                effectively.
              </p>
              <p className='text-muted mt-3'>
                Note: This is a training-oriented template and can be customized
                to suit specific organizational needs.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
