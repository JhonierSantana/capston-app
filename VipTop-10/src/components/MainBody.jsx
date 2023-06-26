import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const MainBody = () => {
  return (
    <div className='jumbotron'>
      <Container fluid className='py-5 px-5'>
        <h1 className='info display-7 fw-bold'><span class="highlight">Aquí va info relevante</span></h1>
        <br />
        <p className='info fs-5'>
          <span class="highlight">Welcome to VIPTOP10, we got locations for you!!!</span>
        </p>
        <br />
        <a href="#app">
          <Button className='app' variant='info'>Try it!!</Button>
        </a>
      </Container>
    </div>

  )
}