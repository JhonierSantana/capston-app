import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const VeterinaryCareTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top's title</h1>
      <hr />
      <Container className='Outer'>
        <ListItem className='list1' top_image='top_10.png' />
        <ListItem className='list1' top_image='top_9.png' />
        <ListItem className='list1' top_image='top_8.png' />
        <ListItem className='list1' top_image='top_7.png' />
        <ListItem className='list1' top_image='top_6.png' />
        <ListItem className='list1' top_image='top_5.png' />
        <ListItem className='list1' top_image='top_4.png' />
        <ListItem className='list1' top_image='top_3.png' />
        <ListItem className='list1' top_image='top_2.png' />
        <ListItem className='list1' top_image='top_1.png' />
      </Container>
      <FooterNav />
    </>
  )
}
