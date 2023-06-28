import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style/index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const AquariumTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top 10 aquariums</h1>
      <hr />
      <Container className='Outer'>
        <ListItem className='list1' top_image='top_10.png' place_img='aquarium_1.jpg'
        place_title='Mistery Aquarium' place_description='Attraction, fish, sea.'
        place_address='4605 Oakmound Road, Chicago, 773-227-3735' />
        <ListItem className='list1' top_image='top_9.png' place_img='aquarium_1.jpg'
        place_title='Coral Heaven' place_description='Attraction, fish, sea.'
        place_address='2736 University Drive, Chicago, 312-798-9262' />
        <ListItem className='list1' top_image='top_8.png' place_img='aquarium_1.jpg'
        place_title='Aquatic Serenity' place_description='Attraction, fish, sea.'
        place_address='1179 Pringle Drive, Chicago, 312-337-2017' />
        <ListItem className='list1' top_image='top_7.png' place_img='aquarium_1.jpg'
        place_title="Neptune's Oasis" place_description='Attraction, fish, sea.'
        place_address='4561 Ross Street, Chicago, 618-300-6306' />
        <ListItem className='list1' top_image='top_6.png' place_img='aquarium_1.jpg'
        place_title='Crystal Waters' place_description='Attraction, fish, sea.'
        place_address='1314 Oakmound Road, Chicago, 773-218-6178' />
        <ListItem className='list1' top_image='top_5.png' place_img='aquarium_1.jpg'
        place_title='AquaZen' place_description='Attraction, fish, sea.'
        place_address='1322 Flinderation Road, Chicago, 708-375-8068' />
        <ListItem className='list1' top_image='top_4.png' place_img='aquarium_1.jpg'
        place_title='Marine Paradise' place_description='Attraction, fish, sea.'
        place_address='4862 Walkers Ridge Way, Chicago, 630-237-0197' />
        <ListItem className='list1' top_image='top_3.png' place_img='aquarium_1.jpg'
        place_title='Oceanic Wonder' place_description='Attraction, fish, sea.'
        place_address='1655 Cecil Street, Chicago, 312-258-8971' />
        <ListItem className='list1' top_image='top_2.png' place_img='aquarium_1.jpg'
        place_title='Aquamarine Haven' place_description='Attraction, fish, sea.'
        place_address='1516 West Drive, Chicago, 312-443-8187' />
        <ListItem className='list1' top_image='top_1.png' place_img='aquarium_1.jpg'
        place_title='Tranquil Tides' place_description='Attraction, fish, sea.'
        place_address='2203 Cecil Street, Chicago, 312-223-1278' />
        </Container>
      <FooterNav />
    </>
  )
}
