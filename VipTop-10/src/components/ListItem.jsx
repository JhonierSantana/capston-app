import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import '../style//index.css';
import '../style/ListItem.css';

export const ListItem = ({ top_image, place_img, place_title, place_description, place_address }) => {
  return (
      <div className='list1 rounded-4 my-3'>
        <img className='top_img' src={`../../img/img_top/${top_image}`} alt="Top image" />
        <br />
        <img className='place_img rounded-4' src={`../../img/img_places/${place_img}`} alt="Place image" />
        <h4 className='fs-3'>{`${place_title}`}</h4>
        <p className='fs-4'>{`${place_description}`}</p>
        <p className='fs-5'>{`${place_address}`}</p>
      </div>
  )
};
