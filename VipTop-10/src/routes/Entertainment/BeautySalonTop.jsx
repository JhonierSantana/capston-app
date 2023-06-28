import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const BeautySalonTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top's title</h1>
      <hr />
      <Container className='Outer'>
        <ListItem className='list1' top_image='top_10.png' place_img='salon_1.png'
          place_title='Belle Curls' place_description='Beauty, Relaxation, Hair'
          place_address='544 Hilltop Street, Springfield, 413-638-0368' />
        <ListItem className='list1' top_image='top_9.png' place_img='salon_1.png'
          place_title='Mia Bella' place_description='Beauty, Relaxation, Hair'
          place_address='3447 Walnut Hill Drive, Springfield, 513-327-4520' />
        <ListItem className='list1' top_image='top_8.png' place_img='salon_1.png'
          place_title='Pretty Parlor' place_description='Beauty, Relaxation, Hair'
          place_address='3473 Meadowbrook Mall Road, Springfield, 310-849-5632' />
        <ListItem className='list1' top_image='top_7.png' place_img='salon_1.png'
          place_title='Tres Beaux' place_description='Beauty, Relaxation, Hair'
          place_address='4755 Dye Street, Springfield, 480-627-2455' />
        <ListItem className='list1' top_image='top_6.png' place_img='salon_1.png'
          place_title='Beautyfly' place_description='Beauty, Relaxation, Hair'
          place_address='1999 Coplin Avenue, Springfield, 602-555-1636' />
        <ListItem className='list1' top_image='top_5.png' place_img='salon_1.png'
          place_title='Ella Touch' place_description='Beauty, Relaxation, Hair'
          place_address='2763 Caynor Circle, Springfield, 908-519-5379' />
        <ListItem className='list1' top_image='top_4.png' place_img='salon_1.png'
          place_title='Encapture' place_description='Beauty, Relaxation, Hair'
          place_address='2235 Cessna Drive, Springfield, 260-436-3868' />
        <ListItem className='list1' top_image='top_3.png' place_img='salon_1.png'
          place_title='Naked Notion' place_description='Beauty, Relaxation, Hair'
          place_address='1966 Smith Street, Springfield, 508-817-1204' />
        <ListItem className='list1' top_image='top_2.png' place_img='salon_1.png'
          place_title='Beauty Lord' place_description='Beauty, Relaxation, Hair'
          place_address='1147 Lindale Avenue, Springfield, 510-532-1367' />
        <ListItem className='list1' top_image='top_1.png' place_img='salon_1.png'
          place_title='Salon Envy' place_description='Beauty, Relaxation, Hair'
          place_address='2891 Traction Street, Springfield, 864-493-7512' />
      </Container>
      <FooterNav />
    </>
  )
}
