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

export const Box_content = ({ category }) => {
  let content = null;

  switch (category) {
    case 'Entertainment':
      content = <Entertainment />;
      break;
    case 'Attractions':
      content = <Attractions />;
      break;
    case 'Food':
      content = <Food />;
      break;
    case 'Shopping':
      content = <Shopping />;
      break;
    case 'Service':
      content = <Service />;
      break;
    default:
      content = null;
  }

  return (
    <div id="myCarousel" className="carousel slide">
      <div className="carousel-inner">
        {content}
      </div>
      {content && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};
