// This file contains the app footer component that can be reused for different pages.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container.js';


export const FooterNav = () => {
  const columns = [
    {
      title: "Front-end Team",
      resources: [
        { name: "Daniel Ortiz", link: "https://www.linkedin.com/in/daniel-ortiz-8b8983273/" },
        { name: "Jhonier Santana", link: "https://www.linkedin.com/in/jhonier-yesid-santana-pedroza-457492265/" },
        { name: "Camilo Zapata", link: "https://www.linkedin.com/in/camilo-zapata-41a045259/" },
        { name: "Jerson Riascos", link: "https://www.linkedin.com/in/jerson-riascos-32b3ab272/" }
      ]
    },
    {
      title: "Back-end Team",
      resources: [
        { name: "Obed Rayo", link: "/item9" },
        { name: "Esteban Enriquez", link: "/item10" },
        { name: "Christian Jurado", link: "/item11" }
      ]
    },
    {
      title: "Sponsors",
      resources: [
        { name: "Holberton", link: "/item1", image: "holberton.png" },
        { name: "Laboratio", link: "/item2", image: "laboratio.png" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <Container className="container1">
        <div className="footer-columns">
          {columns.map((column, index) => (
            <div key={index} className={`footer-column ${column.title === "Sponsors" ? "right-column" : ""}`}>
              <h4>{column.title}</h4>
              <ul className="footer-resources">
                {column.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link}>
                      {resource.name === "Holberton" && (
                        <img className='img-sponsors' src="../../img/icons/holberton.jpg" alt="logo" />
                      )}
                      {resource.name === "Laboratio" && (
                        <img className='img-sponsors1' src="../../img/icons/laboratio.jpeg" alt="logo" />
                      )}
                      {resource.name !== "Holberton" && resource.name !== "Laboratio" && (
                        <span>{resource.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
