import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import '../style//index.css';
import '../style/ListItem.css';

export const ListItem = ({ top_image, top_place_img }) => {
  return (
      <div className='list1 rounded-4 my-3'>
        <img className='top_img' src={`../../img/img_top/${top_image}`} alt="Top image" />
        <h4>Holbertonlandia</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
      </div>
  )
};
