import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export const App = () => {

  return (
    <>
      <header className='head-bar sticky-top py-2'>
        <Container>
          <picture>
            <img src="../img/logo.png" alt="logo" />
          </picture>
          <h4 className='fs-1'>VIPTOP-10</h4>
          <Button variant="secondary">Settings</Button>
        </Container>
      </header>
    </>
  )
}
