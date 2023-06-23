import React from 'react'

export const FooterNav = () => {

  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto possimus tenetur iure ducimus eveniet deserunt sapiente! Fugiat nihil id aperiam laboriosam magnam reiciendis, facilis officiis, possimus ad, veniam inventore?";
  const title = "Titulo del Footer";

  const columns = [
    {
      title: "Sponsors",
      resources: [
        { name: "Holberton", link: "/item1" },
        { name: "Laboratio", link: "/item2" }
      ]
    },
    {
      title: "Front-end Team",
      resources: [
        { name: "Daniel Ortiz", link: "/item5" },
        { name: "Jhonier Santana", link: "/item6" },
        { name: "Camilo Zapata", link: "/item7" },
        { name: "Jerson Riascos", link: "/item8" }
      ]
    },
    {
      title: "Back-end Team",
      resources: [
        { name: "Obed Rayo", link: "/item9" },
        { name: "Esteban Enriquez", link: "/item10" },
        { name: "Christian Jurado", link: "/item11" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="footer-columns">
          {columns.map((column, index) => (
            <div key={index} className="footer-column">
              <h4>{column.title}</h4>
              <ul className="footer-resources">
                {column.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.link}>{resource.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};