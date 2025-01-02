import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import routeNames from 'src/utils/routeNames';

const Header: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <Navbar expand='lg' className='custom-navbar'>
      <Container className='nav-container'>
        <Navbar.Brand href={routeNames.home}>Elio PMS</Navbar.Brand>
        <Nav className='links-container'>
          <Nav.Link
            href={routeNames.home}
            active={activePath === routeNames.home}
            className={activePath === routeNames.home ? 'active-link' : ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href={routeNames.products}
            active={activePath === routeNames.products}
            className={activePath === routeNames.products ? 'active-link' : ''}
          >
            Products
          </Nav.Link>
          <Nav.Link
            href={routeNames.about}
            active={activePath === routeNames.about}
            className={activePath === routeNames.about ? 'active-link' : ''}
          >
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
