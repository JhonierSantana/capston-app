// This file calls different components like Headbar,
//    Listitem and Footernav to create the Top 10 page for this category.
import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const BookStoreTop = () => {
  // The Listitem component takes several arguments to display
  //    the information for each place on the top list.
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
