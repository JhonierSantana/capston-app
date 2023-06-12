import React from 'react'
import Container from 'react-bootstrap/Container';

export const MainBody = () => {
  return (
    <Container>
      <div className='jumbotron rounded-3'>
        <Container fluid className='py-4 px-5'>
          <h1 className='display-7 fw-bold'>Aquí va info relevante</h1>
          <p className='col-md-6 fs-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis sunt iure aliquam quam amet deleniti nulla explicabo
            fugit tempora. Enim, adipisci! Laboriosam, expedita? Unde
            esse dolores vel sed, rerum necessitatibus.
          </p>
        </Container>
      </div>
    </Container>
  )
}
