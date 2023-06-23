import React from 'react';
import { Headerbar } from '../../components/HeaderBar.jsx';
import { ListItem } from '../../components/ListItem.jsx';
import { FooterNav } from '../../components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/App.css';
import '../../style/index.css';

export const AmusementParkTop = () => {
  const items = [
    { top_image: 'top_10.png', top_place_img: 'park_1.jpeg' },
    { top_image: 'top_9.png', top_place_img: 'park_2.jpeg' },
    { top_image: 'top_8.png', top_place_img: 'park_3.jpeg' },
    { top_image: 'top_7.png', top_place_img: 'park_4.jpeg' },
    { top_image: 'top_6.png', top_place_img: 'park_5.jpeg' },
    { top_image: 'top_5.png', top_place_img: 'park_6.jpeg' },
    { top_image: 'top_4.png', top_place_img: 'park_7.jpeg' },
    { top_image: 'top_3.png', top_place_img: 'park_8.jpeg' },
    { top_image: 'top_2.png', top_place_img: 'park_9.jpeg' },
    { top_image: 'top_1.png', top_place_img: 'park_10.jpeg' }
  ];

  const columns = 4;

  const renderListItems = () => {
    const rows = Math.ceil(items.length / columns);
  
    // Rellena las cajas faltantes para obtener una distribución simétrica
    const diff = rows * columns - items.length;
    for (let i = 0; i < diff; i++) {
      items.push({ top_image: '', top_place_img: '' });
    }
  
    const penultimateIndex = items.length - 2;
    const lastRowIndex = Math.floor(penultimateIndex / columns);
  
    return Array.from({ length: rows }).map((_, rowIndex) => {
      const isLastRow = rowIndex === lastRowIndex;
      const isPenultimateColumn = columns >= 2 && rowIndex === lastRowIndex && penultimateIndex % columns === columns - 2;
  
      return (
        <div className="row" key={rowIndex}>
          {items.slice(rowIndex * columns, (rowIndex + 1) * columns).map((item, colIndex) => {
            const currentIndex = rowIndex * columns + colIndex;
  
            let columnClassName = `col-${12 / columns}`;
            if (isLastRow && isPenultimateColumn) {
              columnClassName += ' offset-2';
            }
  
            return (
              <div className={columnClassName} key={colIndex}>
                {item.top_image && item.top_place_img ? (
                  <ListItem top_image={item.top_image} top_place_img={item.top_place_img} />
                ) : null}
              </div>
            );
          })}
        </div>
      );
    });
  };
  
  return (
    <>
      <Headerbar />
      <h1 className="title mt-3">Top 10 Amusement Parks</h1>
      <hr />
      <div className="container">
        {renderListItems()}
      </div>
      <FooterNav />
    </>
  );
};