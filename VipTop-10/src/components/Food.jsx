// This is the component that shows the sub-categories for Food.
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'
import { Link } from 'react-router-dom';

export const Food = () => {

  // the Link component transforms each subcategory into a hyperlink that redirects
  //    the user to the selected top 10 page.
  // Each subcategory is separated by a box design and is accompanied by a reference image.
  return (
    <div className="container" id='cr'>
      <Link to={"bakery_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Bakery</h3>
            <hr />
            <img src="../../img/img_food/cupcake.png" alt="Bakery-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"bar_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Bar</h3>
            <hr />
            <img src="../../img/img_food/beer.png" alt="Bar-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"cafe_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Cafe</h3>
            <hr />
            <img src="../../img/img_food/coffee-cup.png" alt="Cafe-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"meal_takeaway_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Meal Takeaway</h3>
            <hr />
            <img src="../../img/img_food/takeaway.png" alt="Meal Takeaway-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"restaurant_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Restaurant</h3>
            <hr />
            <img src="../../img/img_food/restaurant.png" alt="Restaurant-logo" id='logito' />
          </picture>
        </div>
      </Link>
    </div>
  )
}
