import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Box_content = () => {
    return (
        <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container" id='cr'>
                        <div className="item-box mt-3 rounded">Box 1</div>
                        <div className="item-box mt-3 rounded">Box 2</div>
                        <div className="item-box mt-3 rounded">Box 3</div>
                        <div className="item-box mt-3 rounded">Box 4</div>
                        <div className="item-box mt-3 rounded">Box 5</div>
                        <div className="item-box mt-3 rounded">Box 6</div>
                        <div className="item-box mt-3 rounded">Box 7</div>
                        <div className="item-box mt-3 rounded">Box 8</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container" id='cr'>
                        <div className="item-box mt-3 rounded">Box 1</div>
                        <div className="item-box mt-3 rounded">Box 2</div>
                        <div className="item-box mt-3 rounded">Box 3</div>
                        <div className="item-box mt-3 rounded">Box 4</div>
                        <div className="item-box mt-3 rounded">Box 5</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container" id='cr'>
                        <div className="item-box mt-3 rounded">Box 1</div>
                        <div className="item-box mt-3 rounded">Box 2</div>
                        <div className="item-box mt-3 rounded">Box 3</div>
                        <div className="item-box mt-3 rounded">Box 4</div>
                        <div className="item-box mt-3 rounded">Box 5</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container" id='cr'>
                        <div className="item-box mt-3 rounded">Box 1</div>
                        <div className="item-box mt-3 rounded">Box 2</div>
                        <div className="item-box mt-3 rounded">Box 3</div>
                        <div className="item-box mt-3 rounded">Box 4</div>
                        <div className="item-box mt-3 rounded">Box 5</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container" id='cr'>
                        <div className="item-box mt-3 rounded">
                            <picture>
                                <h3>Car Rent</h3>
                                <hr />
                                <img src="../../img/img_service/car-rent.png" alt="car-rent-logo" />
                            </picture>
                        </div>
                        <div className="item-box mt-3 rounded">
                            <picture>
                                <h3>Pharmacy</h3>
                                <hr />
                                <img src="../../img/img_service/meds.png" alt="meds-logo" />
                            </picture>
                        </div>
                        <div className="item-box mt-3 rounded">
                            <picture>
                                <h3>Vet Med</h3>
                                <hr />
                                <img src="../../img/img_service/vet.png" alt="vet-logo" />
                            </picture>
                        </div>
                        <div className="item-box mt-3 rounded">
                            <picture>
                                <h3>Gym</h3>
                                <hr />
                                <img src="../../img/img_service/weights.png" alt="Gym-logo" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}