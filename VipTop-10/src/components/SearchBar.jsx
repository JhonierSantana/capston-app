import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Box_content } from './Box';
import { GetCountries } from '../../api/GetCountries';
import axios from "axios";

export const SearchBar = () => {
  const [listCountries, setListCountries] = useState([]);
  const [listCities, setListCities] = useState([]);
  const [country, setCountry] = useState('Carousel');
  const [city, setCity] = useState('Carousel');
  const [category, setCategory] = useState('Carousel');
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    GetCountries()
      .then(response => {
        setListCountries(response.data);
      });
  }, []);

  const GetCities = () => {
    const url = "https://localhost:5000/api/cities"
    const body = {
      "country": country
    }
    axios.post(url, body)
      .then((response) => {
        setListCities(response.data);
      });
  }

  useEffect(() => {
    GetCities();
  }, [country]);

  const keepSelector1 = (e) => {
    setCountry(e.target.value);
  };

  const keepSelector2 = (e) => {
    setCity(e.target.value);
  };

  const keepSelector3 = (e) => {
    setCategory(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearched(true);
  };

  return (
    <Container>
      <br id='app' />
      <div className="search-bar rounded-4 mb-3 d-flex">
        <div className="mx-2 flex-grow-1">
          <Form>
            <Form.Select
              name="Country"
              value={country}
              onChange={keepSelector1}
            >
              <option value="">Country...</option>
              {listCountries.map((item) => {
                return <option key={item.name}>{item.name}</option>
              })}
            </Form.Select>
          </Form>
        </div>
        <div className="me-2 flex-grow-1">
          <Form>
            <Form.Select
              name="City"
              value={city}
              onChange={keepSelector2}
            >
              <option value="">City...</option>
              {listCities.map((item) => {
                return <option key={item.name}>{item.name}</option>
              })}
            </Form.Select>
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
