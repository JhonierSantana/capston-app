// This carousel gives a touch of interactivity to the main page so that
//    users dynamically select the category they want to see.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css';
import '../style/Box.css';
import { Entertainment } from './Entertainment';
import { Attractions } from './Attractions';
import { Food } from './Food';
import { Shopping } from './Shopping';
import { Service } from './Service';
import Container from 'react-bootstrap/esm/Container';

export const Carousel = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <Container>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1>Entertainment</h1>
              <Entertainment />
            </div>
            <div className="carousel-item">
              <h1>Attractions</h1>
              <Attractions />
            </div>
            <div className="carousel-item">
              <h1>Food</h1>
              <Food />
            </div>
            <div className="carousel-item">
              <h1>Shopping</h1>
              <Shopping />
            </div>
            <div className="carousel-item">
              <h1>Service</h1>
              <Service />
            </div>
          </div>
        </Container>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};