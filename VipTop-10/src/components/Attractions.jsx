import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Attractions = () => {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Aquarium</h3>
                            <hr />
                            <img src="../../img/img_service/car-rent.png" alt="Aquarium-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Art Gallery</h3>
                            <hr />
                            <img src="../../img/img_service/meds.png" alt="Art Gallery-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Museum</h3>
                            <hr />
                            <img src="../../img/img_service/vet.png" alt="Museum-logo" id='logito' />
                        </picture>
                    </div> 
                </div>
            </div>
            <div className="carousel-item">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Tourist Attraction</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Tourist Attraction-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Zoo</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Zoo-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
