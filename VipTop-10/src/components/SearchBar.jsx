import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Box_content } from './Box';
import { Carousel } from './Carousel';

export const SearchBar = () => {
  const [category, setCategory] = useState('Carousel');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(true);



  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearched(true);
  };

  return (
    <Container>
      <div className="search-bar rounded-4 py-2 mb-3 d-flex">
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Control
              type="text"
              placeholder="Country..."
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form>
        </div>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Control
              type="text"
              placeholder="City..."
              onChange={(e) => setCity(e.target.value)}
            />
          </Form>
        </div>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Select
              name="Category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Category...</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Attractions">Attractions</option>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Service">Service</option>
            </Form.Select>
          </Form>
        </div>
      </div>

      {searched && category && <Box_content category={category} />}
    </Container>
  );
};
