import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style/ListItem.css'


export const ListItem = ({top_image, top_place_img}) => {
  return (
    <Container>
      <div className='list rounded-4 my-3'>
        <img className='top_img' src={`../../img/img_top/${top_image}`} alt="Top image" />
        <img className='top_place_img rounded-4' src={`../../img/img_places/${top_place_img}`} alt="place image" />
        <h4>Holbertonlandia</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium dolore perspiciatis, modi illum animi eum, recusandae nesciunt est voluptatibus facere? Aliquid a blanditiis porro facere! Corrupti nulla consectetur provident.</p>
        <img className='icon' src="../../img/icons/map.png" alt="map" />
      </div>
    </Container>
  )
}
