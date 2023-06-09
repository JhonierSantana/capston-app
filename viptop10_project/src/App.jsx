import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function App () {
  return (
    <header className='head-bar py-2'>
      <Navbar sticky="top" />
      <div>
        <Container>
          <picture>
            <img src="../img/logo.png" alt="logo" />
          </picture>
        </Container>
      </div>
    </header>
  )
}
