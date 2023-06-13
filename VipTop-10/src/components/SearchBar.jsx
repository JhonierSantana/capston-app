import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const SearchBar = () => {
  return (
    <Container>
      <div className='search-bar rounded-4 py-2 mb-3 d-flex'>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Control type='text' placeholder='Country...' />
          </Form>
        </div>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Control type='text' placeholder='City...' />
          </Form>
        </div>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Select name='City'>
              <option value=''>Category...</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Attractions'>Attractions</option>
              <option value='Shopping'>Shopping</option>
              <option value='Service'>Service</option>
            </Form.Select>
          </Form>
        </div>
        <Button variant="secondary" className='btn'>Search</Button>
      </div>
    </Container>
  );
};
