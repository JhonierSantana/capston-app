import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const MainBody = () => {
  return (
      <div className='jumbotron'>
        <Container fluid className='py-5 px-5'>
          <h1 className='info display-7 fw-bold'>Aquí va info relevante</h1>
          <p className='info col-md-6 fs-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis sunt iure aliquam quam amet deleniti nulla explicabo
            fugit tempora. Enim, adipisci! Laboriosam, expedita? Unde
            esse dolores vel sed, rerum necessitatibus.
          </p>
          <a href="#app">
            <Button className='app' variant='primary'>Try it!!</Button>
          </a>
        </Container>
      </div>
    
  )
}