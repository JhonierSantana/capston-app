import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/ListItem.css';

export const ListItem = ({ top_image, top_place_img }) => {
  return (
    <Container className="custom-container">
      <Row>
        <Col xs={10} sm={8} md={6} lg={4} className="text-center">
          <div className='list1 rounded-4 my-3'>
            <div className="image-container">
              <img className='top_img' src={top_image} alt="Top image" />
            </div>
            <div className="content">
              <h4>Holbertonlandia</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

