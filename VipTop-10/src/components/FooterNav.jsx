import React from 'react';

export const FooterNav = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto possimus tenetur iure ducimus eveniet deserunt sapiente! Fugiat nihil id aperiam laboriosam magnam reiciendis, facilis officiis, possimus ad, veniam inventore?";
  const title = <img className='img-footer' src="../img/logo-no-background.png" alt="logo" />;

  const columns = [
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
      <div className="container1">
        <div className="footer-description">
          <h3>{title}</h3>
        </div>
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
      </div>
    </footer>
  );
};
