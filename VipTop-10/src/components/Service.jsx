import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'
import { useNavigate } from "react-router-dom";

export const Service = () => {
    const navigate = useNavigate();

    function SearchClick() {
        navigate('/search')
    }
    return (
        <div className="container" id='cr'>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Car Rental</h3>
                    <hr />
                    <img src="../../img/img_service/car-rent.png" alt="Car Rental-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Gym</h3>
                    <hr />
                    <img src="../../img/img_service/weights.png" alt="Gym-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Pharmacy</h3>
                    <hr />
                    <img src="../../img/img_service/meds.png" alt="Pharmacy-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Veterinary Care</h3>
                    <hr />
                    <img src="../../img/img_service/vet.png" alt="Veterinary Care-logo" id='logito' />
                </picture>
            </div>
        </div>
    )
}
