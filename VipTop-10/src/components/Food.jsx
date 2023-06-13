import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Food = () => {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Bakery</h3>
                            <hr />
                            <img src="../../img/img_service/car-rent.png" alt="Bakery-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Bar</h3>
                            <hr />
                            <img src="../../img/img_service/meds.png" alt="Bar-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Cafe</h3>
                            <hr />
                            <img src="../../img/img_service/vet.png" alt="Cafe-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Meal Takeaway</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Meal Takeaway-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Restaurant</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Restaurant-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
