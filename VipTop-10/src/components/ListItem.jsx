import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style/ListItem.css'


export const ListItem = ({top_image}) => {
  return (
    <Container>
      <div className='list rounded-4 my-3'>
        <img className='top_img' src={`../../img/img_top/${top_image}`} alt="Top image" />
      </div>
    </Container>
  )
}
