import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const MainBody = () => {
  return (
      <div className='jumbotron'>
        <Container fluid className='py-5 px-5'>
          <h1 className='info display-7 fw-bold'>Aquí va info relevante</h1>
          <p className='info fs-5'>
            Welcome to VIPTOP10, we got locations for you!!!
          </p>
          <a href="#app">
            <Button className='app' variant='primary'>Try it!!</Button>
          </a>
        </Container>
      </div>
    
  )
}