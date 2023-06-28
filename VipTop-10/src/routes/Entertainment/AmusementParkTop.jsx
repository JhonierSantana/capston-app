import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const AmusementParkTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top's title</h1>
      <hr />
      <Container className='Outer'>
        <ListItem className='list1' top_image='top_10.png' place_img='park_2.png'
          place_title='Kings Island' place_description='Entertainment, Fun, Park.'
          place_address='1611 Hillview Drive, Fremont, 707-228-3441' />
        <ListItem className='list1' top_image='top_9.png' place_img='park_2.png'
          place_title='Happy Funland' place_description='Entertainment, Fun, Park.'
          place_address='2365 Meadow View Drive, Fremont, 860-538-4493' />
        <ListItem className='list1' top_image='top_8.png' place_img='park_2.png'
          place_title='MindScape' place_description='Entertainment, Fun, Park.'
          place_address='1545 Filbert Street, Fremont, 610-857-3424' />
        <ListItem className='list1' top_image='top_7.png' place_img='park_2.png'
          place_title='NickelRide' place_description='Entertainment, Fun, Park.'
          place_address='441 Maple Avenue, Fremont, 209-251-5758' />
        <ListItem className='list1' top_image='top_6.png' place_img='park_2.png'
          place_title='Wacky World' place_description='Entertainment, Fun, Park.'
          place_address='268 Lawman Avenue, Fremont, 703-291-3796' />
        <ListItem className='list1' top_image='top_5.png' place_img='park_2.png'
          place_title='Sandyland' place_description='Entertainment, Fun, Park.'
          place_address='3365 Blane Street, Fremont, 314-548-1750' />
        <ListItem className='list1' top_image='top_4.png' place_img='park_2.png'
          place_title='BouncyLand' place_description='Entertainment, Fun, Park.'
          place_address='1949 Poplar Chase Lane, Fremont, 208-321-2319' />
        <ListItem className='list1' top_image='top_3.png' place_img='park_2.png'
          place_title='Magically Fun' place_description='Entertainment, Fun, Park.'
          place_address='3130 Lost Creek Road, Fremont, 610-926-8747' />
        <ListItem className='list1' top_image='top_2.png' place_img='park_2.png'
          place_title='SnappyPark' place_description='Entertainment, Fun, Park.'
          place_address='4050 Formula Lane, Fremont, 469-718-6489' />
        <ListItem className='list1' top_image='top_1.png' place_img='park_2.png'
          place_title='MerryGoRound' place_description='Entertainment, Fun, Park.'
          place_address='51 Pinnickinick Street, Fremont, 360-769-3691' />
      </Container>
      <FooterNav />
    </>
  )
}