import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Entertaiment = () => {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Amusement Park</h3>
                            <hr />
                            <img src="../../img/img_service/car-rent.png" alt="Amusement Park-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Bowling Alley</h3>
                            <hr />
                            <img src="../../img/img_service/meds.png" alt="Bowling Alley-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Casino</h3>
                            <hr />
                            <img src="../../img/img_service/vet.png" alt="Casino-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Movie Theater</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Movie Theater-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Night Club</h3>
                            <hr />
                            <img src="../../img/img_service/car-rent.png" alt="Night Club-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Stadium</h3>
                            <hr />
                            <img src="../../img/img_service/meds.png" alt="Stadium-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Beauty Salon</h3>
                            <hr />
                            <img src="../../img/img_service/vet.png" alt="Beauty Salon-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Spa</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Spa" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}