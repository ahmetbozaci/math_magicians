import React from 'react';
import { Container } from 'reactstrap';

const Quote = () => (
  <Container className="quote">
    <div>
      <q className="lead my-5">
        Mathematic is not about numbers, equations, computations or algorithms:
        it is about understanding.
      </q>
      <span className="lead"> - William Paul Thurston</span>
    </div>
  </Container>
);

export default Quote;
