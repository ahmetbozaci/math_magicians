import React from 'react';
import { Container } from 'reactstrap';

const Home = () => (
  <Container className="mt-4">
    <h1>Invention of the mechanical calculator</h1>
    <article className="my-4">
      <p>
        Blaise Pascal invented a mechanical calculator with a sophisticated
        carry mechanism in 1642. After three years of effort and 50 prototypes
        he introduced his calculator to the public. He built twenty of these
        machines in the following ten years. This machine could add and subtract
        two numbers directly and multiply and divide by repetition. Since,
        unlike Schickard&apos;s machine, the Pascaline dials could only rotate in one
        direction zeroing it after each calculation required the operator to
        dial in all 9s and then (method of re-zeroing) propagate a carry right
        through the machine. This suggests that the carry mechanism would have
        proved itself in practice many times over. This is a testament to the
        quality of the Pascaline because none of the 17th and 18th century
        criticisms of the machine mentioned a problem with the carry mechanism
        and yet it was fully tested on all the machines, by their resets, all
        the time.
      </p>
      <p>
        Pascal&apos;s invention of the calculating machine, just three hundred years
        ago, was made while he was a youth of nineteen. He was spurred to it by
        seeing the burden of arithmetical labour involved in his father&apos;s
        official work as supervisor of taxes at Rouen. He conceived the idea of
        doing the work mechanically, and developed a design appropriate for this
        purpose; showing herein the same combination of pure science and
        mechanical genius that characterized his whole life. But it was one
        thing to conceive and design the machine, and another to get it made and
        put into use. Here were needed those practical gifts that he displayed
        later in his inventions...
      </p>
      <p>
        Check the
        <a href="https://en.wikipedia.org/wiki/Mechanical_calculator#:~:text=Blaise%20Pascal%20invented%20a%20mechanical,in%20the%20following%20ten%20years.">
          {' '}
          link
          {' '}
        </a>
        for more information
      </p>
    </article>
  </Container>
);

export default Home;
