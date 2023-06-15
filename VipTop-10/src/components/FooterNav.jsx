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
    },
    {
      name: "Camilo Zapata",
      link: "/item7"
    }, {
      name: "Jerson Riascos",
      link: "/item8"
    }]
  }, {
    title: "Back-end Team",
    resources: [{
      name: "Obed Rayo",
      link: "/item9"
    }, {
      name: "Esteban Enriquez",
      link: "/item10"
    }, {
      name: "Christian Jurado",
      link: "/item11"
    }]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    backgroundColor="#2B2D42"
    fontColor="#EDF2F4"
  />;
}
