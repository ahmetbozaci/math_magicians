/** @format */

import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  const footerStyle = {
    fontSize: '25px',
    color: '#726d6d',
  };
  const footerLink = {
    textDecoration: 'none',
    paddingLeft: '10px',
    color: '#726d6d',
  };

  return (
    <Container className="text-center">
      <footer style={footerStyle}>
        &copy; Copyright 2021
        <a href="www.github.com/ahmetbozaci" style={footerLink}>
          Ahmet Bozacı
        </a>
      </footer>
    </Container>
  );
};

export default Footer;
