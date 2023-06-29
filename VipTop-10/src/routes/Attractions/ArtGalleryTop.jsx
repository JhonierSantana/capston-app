import React from 'react'
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style//index.css';
import '../../style/ListItem.css';
import Container from 'react-bootstrap/esm/Container.js';

export const ArtGalleryTop = () => {
  return (
    <>
      <Headerbar />
      <h1 className='title mt-3'>Top 10 art gallery</h1>
      <hr />
      <Container className='Outer'>
      <ListItem className='list1' top_image='top_10.png' place_img='gallery_1.jpeg'
        place_title='Chroma Gallery' place_description='Attraction, Art, Modern.'
        place_address='1560 Cantebury Drive, Dallas, 646-713-6084' />
        <ListItem className='list1' top_image='top_9.png' place_img='gallery_1.jpeg'
        place_title='Canvas Collective' place_description='Attraction, Art, Modern.'
        place_address='3561 Bassell Avenue, Dallas, 501-801-0719' />
        <ListItem className='list1' top_image='top_8.png' place_img='gallery_1.jpeg'
        place_title='Visionary Vault' place_description='Attraction, Art, Modern.'
        place_address='3903 Jessie Street, Dallas, 740-657-6840' />
        <ListItem className='list1' top_image='top_7.png' place_img='gallery_1.jpeg'
        place_title='Arte Nouveau' place_description='Attraction, Art, Modern.'
        place_address='3095 Ridenour Street, Dallas, 786-306-9681' />
        <ListItem className='list1' top_image='top_6.png' place_img='gallery_1.jpeg'
        place_title='Spectrum Showcase' place_description='Attraction, Art, Modern.'
        place_address='302 North Bend River Road, Dallas, 606-789-8806' />
        <ListItem className='list1' top_image='top_5.png' place_img='gallery_1.jpeg'
        place_title='Muse Gallery' place_description='Attraction, Art, Modern.'
        place_address='2943 Barnes Avenue, Dallas, 513-681-7156' />
        <ListItem className='list1' top_image='top_4.png' place_img='gallery_1.jpeg'
        place_title='Luminary Art Loft' place_description='Attraction, Art, Modern.'
        place_address='4898 Dola Mine Road, Dallas, 919-395-7718' />
        <ListItem className='list1' top_image='top_3.png' place_img='gallery_1.jpeg'
        place_title='Gallery Elysium' place_description='Attraction, Art, Modern.'
        place_address='2419 Oakmound Road, Dallas, 773-306-1806' />
        <ListItem className='list1' top_image='top_2.png' place_img='gallery_1.jpeg'
        place_title='Palette Paradise' place_description='Attraction, Art, Modern.'
        place_address='4345 Abner Road, Dallas, 715-347-9968' />
        <ListItem className='list1' top_image='top_1.png' place_img='gallery_1.jpeg'
        place_title='Reverie Exhibition' place_description='Attraction, Art, Modern.'
        place_address='2664 Young Road, Dallas, 208-406-3529' />
      </Container>
      <FooterNav />
    </>
  )
}
