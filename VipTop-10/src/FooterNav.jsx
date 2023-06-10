import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import './App.css';

export const FooterNav = () => {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <footer className='footer-bar py-2'>
      <Container>
        <p className='page-info col-md-6 fs-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nesciunt quibusdam aut, laborum voluptate aspernatur repellat
          labore sunt eos unde, odio ducimus reiciendis error consequuntur porro!
          Temporibus beatae quaerat error est?
        </p>
        <ListGroup variant="flush">
          <ListGroup.Item action onClick={alertClicked}>Link 1</ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>Link 2</ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>Link 3</ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>Link 4</ListGroup.Item>
        </ListGroup>
      </Container>
    </footer>
  );
};
