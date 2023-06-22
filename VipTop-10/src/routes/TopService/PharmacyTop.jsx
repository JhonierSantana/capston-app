import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';

export const PharmacyTop = () => {
  return (
    <>
    <Headerbar />
    <h1 className='title mt-3'>Top's title</h1>
    <hr />
    <ListItem top_image='top_10.png' />
    <ListItem top_image='top_9.png' />
    <ListItem top_image='top_8.png' />
    <ListItem top_image='top_7.png' />
    <ListItem top_image='top_6.png' />
    <ListItem top_image='top_5.png' />
    <ListItem top_image='top_4.png' />
    <ListItem top_image='top_3.png' />
    <ListItem top_image='top_2.png' />
    <ListItem top_image='top_1.png' />
    <FooterNav />
    </>
  )
}
