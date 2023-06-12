import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export const SearchBar = () => {
    return (
        <Container>
            <div className='search-bar rounded-3 py-3'>
                <Form>
                    <Form.Control className='mx-3' type='text' placeholder='Country...' />
                </Form>
                <Form>
                    <Form.Control className='mx-3' type='text' placeholder='City...' />
                </Form>
                <Form>
                    <Form.Select className='me-3' name='City'>
                        <option>Category...</option>
                    </Form.Select>
                </Form>
            </div>
        </Container>
    )
}
