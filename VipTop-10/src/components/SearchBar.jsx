import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export const SearchBar = () => {
  return (
    <Container>
      <div className='search-bar rounded-4 py-4 mb-3 d-flex'>
        <div className="mx-2 flex-grow-1">
          <Form>
            <Form.Control type='text' placeholder='Country...' />
          </Form>
        </div>
        <div className="mx-2 flex-grow-1">
          <Form>
            <Form.Control type='text' placeholder='City...' />
          </Form>
        </div>
        <div className="ms-3 flex-grow-1">
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
      </div>
    </Container>
  );
};
