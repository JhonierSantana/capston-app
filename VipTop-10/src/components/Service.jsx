// This is the component that shows the sub-categories for Service.
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'
import { Link } from 'react-router-dom';

export const Service = () => {

  // the Link component transforms each subcategory into a hyperlink that redirects
  //    the user to the selected top 10 page.
  // Each subcategory is separated by a box design and is accompanied by a reference image.
  return (
    <div className="container" id='cr'>
      <Link to={"car_rental_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Car Rental</h3>
            <hr />
            <img src="../../img/img_service/car-rent.png" alt="Car Rental-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"gym_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Gym</h3>
            <hr />
            <img src="../../img/img_service/weights.png" alt="Gym-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"pharmacy_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Pharmacy</h3>
            <hr />
            <img src="../../img/img_service/meds.png" alt="Pharmacy-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link to={"veterinary_care_top"}>
      <div className="item-box mt-3 rounded-4">
        <picture>
          <h3>Veterinary Care</h3>
          <hr />
          <img src="../../img/img_service/vet.png" alt="Veterinary Care-logo" id='logito' />
        </picture>
      </div>
      </Link>
    </div>
  )
}
