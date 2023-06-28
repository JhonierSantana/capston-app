import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const StadiumTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top 10 Stadium</h1>
      <hr />
      <Container className='Outer'>
      <ListItem className='list1' top_image='top_10.png' place_img='stadium_1.jpg'
        place_title='Thunderdome Stadium' place_description='Fun, bet, night.'
        place_address='1127 Little Acres Lane, Los Angeles, 217-890-0244' />
        <ListItem className='list1' top_image='top_9.png' place_img='stadium_1.jpg'
        place_title='Silver Arrow Arena' place_description='Fun, bet, night.'
        place_address='3678 Oakmound Drive, Los Angeles, 773-359-0035' />
        <ListItem className='list1' top_image='top_8.png' place_img='stadium_1.jpg'
        place_title="Emerald Field" place_description='Fun, bet, night.'
        place_address='948 Charla Lane, Los Angeles, 972-687-6730' />
        <ListItem className='list1' top_image='top_7.png' place_img='stadium_1.jpg'
        place_title='Victory Park Stadium' place_description='Fun, bet, night.'
        place_address='33 Villa Drive, Los Angeles, 574-383-0936' />
        <ListItem className='list1' top_image='top_6.png' place_img='stadium_1.jpg'
        place_title='Phoenix Rising Arena' place_description='Fun, bet, night.'
        place_address='4728 Carolyns Circle, Los Angeles, 214-741-2909' />
        <ListItem className='list1' top_image='top_5.png' place_img='stadium_1.jpg'
        place_title='Golden Gate Stadium' place_description='Fun, bet, night.'
        place_address='1294 Green Gate Lane, Los Angeles, 443-729-0870' />
        <ListItem className='list1' top_image='top_4.png' place_img='stadium_1.jpg'
        place_title='Diamond Valley Arena' place_description='Fun, bet, night.'
        place_address='376 Harvest Lane, Los Angeles, 660-986-7497' />
        <ListItem className='list1' top_image='top_3.png' place_img='stadium_1.jpg'
        place_title='Royal Crown Park' place_description='Fun, bet, night.'
        place_address='4052 Larry Street, Los Angeles, 414-955-9968' />
        <ListItem className='list1' top_image='top_2.png' place_img='stadium_1.jpg'
        place_title='Liberty Stadium' place_description='Fun, bet, night.'
        place_address='157 Wyatt Street, Los Angeles, 561-396-3614' />
        <ListItem className='list1' top_image='top_1.png' place_img='stadium_1.jpg'
        place_title='Starlight Arena' place_description='Fun, bet, night.'
        place_address='4664 Pheasant Ridge Road, Los Angeles, 215-520-0007' />
      </Container>
      <FooterNav />
    </>
  )
}
