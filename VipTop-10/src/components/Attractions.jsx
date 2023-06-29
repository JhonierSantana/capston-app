// This is the component that shows the sub-categories for Attractions.
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'
import { Link } from 'react-router-dom';

export const Attractions = () => {

  // the Link component transforms each subcategory into a hyperlink that redirects
  //    the user to the selected top 10 page.
  // Each subcategory is separated by a box design and is accompanied by a reference image.
  return (
    <div className="container" id='cr'>
      <Link to={"aquarium_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Aquarium</h3>
            <hr />
            <img src="../../img/img_attractions/aquarium.png" alt="Aquarium-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"art_gallery_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Art Gallery</h3>
            <hr />
            <img src="../../img/img_attractions/gallery.png" alt="Art Gallery-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"museum_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Museum</h3>
            <hr />
            <img src="../../img/img_attractions/museum.png" alt="Museum-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"tourist_attraction_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Tourist Attraction</h3>
            <hr />
            <img src="../../img/img_attractions/statue-of-liberty.png" alt="Tourist Attraction-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"zoo_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Zoo</h3>
            <hr />
            <img src="../../img/img_attractions/zoo.png" alt="Zoo-logo" id='logito' />
          </picture>
        </div>
      </Link>
    </div>
  )
}
