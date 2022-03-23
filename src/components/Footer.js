import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  const footerStyle = {
    fontSize: '25px',
    color: '#726d6d',
    position: 'absolute',
    left: 0,
    bottom: '20px',
    right: 0,
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
