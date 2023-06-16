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
import { Carousel } from './Carousel';

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
      content = <Carousel />;
}
return (
  <>
    {content}
  </>
);
};
