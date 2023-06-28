import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const CasinoTop = () => {
  return (
    <>
    <Headerbar />
    <h1 className='title mt-3'>Top 10 casinos</h1>
    <hr />
    <Container className='Outer'>
        <ListItem className='list1' top_image='top_10.png' place_img='casino_1.jpg'
        place_title='Diamond Sky Casino' place_description='Fun, Bet, Night.'
        place_address='1313 Hiney Road, Indianapolis, 702-245-5532' />
        <ListItem className='list1' top_image='top_9.png' place_img='casino_1.jpg'
        place_title='Sea of gold Casino' place_description='Fun, Bet, Night.'
        place_address='3710 Hall Street, Indianapolis, 702-594-0623' />
        <ListItem className='list1' top_image='top_8.png' place_img='casino_1.jpg'
        place_title="Fortune's Edge Casino" place_description='Fun, Bet, Night.'
        place_address='3676 Sunrise Road, Indianapolis, 702-884-9835' />
        <ListItem className='list1' top_image='top_7.png' place_img='casino_1.jpg'
        place_title='Starlight Oasis Casino' place_description='Fun, Bet, Night.'
        place_address='33 Hall Street, Indianapolis, 702-438-8461' />
        <ListItem className='list1' top_image='top_6.png' place_img='casino_1.jpg'
        place_title='Midnight Mirage Casino' place_description='Fun, Bet, Night.'
        place_address='786 Hickory Ridge Drive, Indianapolis, 702-635-4704' />
        <ListItem className='list1' top_image='top_5.png' place_img='casino_1.jpg'
        place_title='Royal Flush Casino' place_description='Fun, Bet, Night.'
        place_address='316 Mesa Drive, Indianapolis, 702-393-5825' />
        <ListItem className='list1' top_image='top_4.png' place_img='casino_1.jpg'
        place_title='Emerald Isle Casino' place_description='Fun, Bet, Night.'
        place_address='2644 Mesa Drive, Indianapolis, 702-407-5828' />
        <ListItem className='list1' top_image='top_3.png' place_img='casino_1.jpg'
        place_title='Silver Sands Casino' place_description='Fun, Bet, Night.'
        place_address='2115 Hall Street, Indianapolis, 702-554-9073' />
        <ListItem className='list1' top_image='top_2.png' place_img='casino_1.jpg'
        place_title='Golden Lion Casino' place_description='Fun, Bet, Night.'
        place_address='4443 Hall Street, Indianapolis, 702-497-9610' />
        <ListItem className='list1' top_image='top_1.png' place_img='casino_1.jpg'
        place_title='Platinum Peak Casino' place_description='Fun, Bet, Night.'
        place_address='964 Platinum Drive, Indianapolis, 724-769-9720724-769-9720' />
      </Container>
    <FooterNav />
    </>
  )
}
