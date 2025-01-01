import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import routeNames from 'src/utils/routeNames';

const Header: React.FC = () => {
  return (
    <Navbar expand='lg' className='custom-navbar'>
      <Container className='nav-container'>
        <Navbar.Brand href={routeNames.home}>Elio PMS</Navbar.Brand>
        <Nav className='links-container'>
          {/* <Nav.Link href={routeNames.home}>Home</Nav.Link> */}
          <Nav.Link href={routeNames.products}>Products</Nav.Link>
          <Nav.Link href={routeNames.about}>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
