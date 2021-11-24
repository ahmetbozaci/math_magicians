/** @format */

import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Navbar,
} from 'reactstrap';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <Container>
      <Navbar color="info" light expand="md" className="my-5">
        <NavbarBrand tag={RRNavLink} to="/" className="mx-4">
          Math Magicians
        </NavbarBrand>
        <Nav navbar className="ms-auto mx-4">
          {links.map((link) => (
            <NavItem key={link.id}>
              <NavLink tag={RRNavLink} to={link.path} key={link.id} ckas>
                {link.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};
export default NavBar;
