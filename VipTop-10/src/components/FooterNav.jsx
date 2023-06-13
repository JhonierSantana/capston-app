// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';

// export const FooterNav = () => {
//   const alertClicked = () => {
//     alert('You clicked the third ListGroupItem');
//   };

//   return (
//     <footer className='footer-bar py-2 fixed="bottom"'>
//       <Container>
//         <p className='page-info col-md-6 fs-5'>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Nesciunt quibusdam aut, laborum voluptate aspernatur repellat
//           labore sunt eos unde, odio ducimus reiciendis error consequuntur porro!
//           Temporibus beatae quaerat error est?
//         </p>
//         <ListGroup variant="flush">
//           <ListGroup.Item action onClick={alertClicked}>Link 1</ListGroup.Item>
//           <ListGroup.Item action onClick={alertClicked}>Link 2</ListGroup.Item>
//           <ListGroup.Item action onClick={alertClicked}>Link 3</ListGroup.Item>
//           <ListGroup.Item action onClick={alertClicked}>Link 4</ListGroup.Item>
//         </ListGroup>
//       </Container>
//     </footer>
//   );
// };

import React from 'react'
import SimpleReactFooter from 'simple-react-footer';
import Container from 'react-bootstrap/Container';

export const FooterNav = () => {

  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto possimus tenetur iure ducimus eveniet deserunt sapiente! Fugiat nihil id aperiam laboriosam magnam reiciendis, facilis officiis, possimus ad, veniam inventore?";
  const title = "Titulo del Footer";

  const columns = [{
    title: "Sponsors",
    resources: [{
      name: "Holberton",
      link: "/item1"
    }, {
      name: "Laboratio",
      link: "/item2"
    },]
  }, {
    title: "Front-end Team",
    resources: [{
      name: "Daniel Ortiz",
      link: "/item5"
    }, {
      name: "Jhonier Santana",
      link: "/item6"
    }, {
      name: "Camilo Zapata",
      link: "/item6"
    }, {
      name: "Jerson Riascos",
      link: "/item6"
    }]
  }, {
    title: "Back-end Team",
    resources: [{
      name: "Obed Rayo",
      link: "/item7"
    }, {
      name: "Esteban Enriquez",
      link: "/item8"
    }, {
      name: "Christian Jurado",
      link: "/item6"
    }]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    backgroundColor="#FFFCF2"
  />;
}
