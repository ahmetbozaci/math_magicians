/** @format */

// const NavBar = () => {
//   const links = [
//     {
//       id: 1,
//       path: '/',
//       text: 'Home',
//     },
//     {
//       id: 2,
//       path: '/calculator',
//       text: 'Calculator',
//     },
//     {
//       id: 3,
//       path: '/quote',
//       text: 'Quote',
//     },
//   ];
//   return (
//     <Navbar>
//       {links.map((link) => (
//         <p key={link.id}>{link.text}</p>
//       ))}
//     </Navbar>
//   );
// };

// export default NavBar;
import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink,
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
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Math Magicians</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {links.map((link) => (
            <NavItem key={link.id}>
              <NavLink key={link.id}>{link.text}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
