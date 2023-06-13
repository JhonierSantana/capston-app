import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Shopping = () => {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Book Store</h3>
                            <hr />
                            <img src="../../img/img_service/car-rent.png" alt="Book Store-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Convenience Store</h3>
                            <hr />
                            <img src="../../img/img_service/meds.png" alt="Convenience Store-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Department Store</h3>
                            <hr />
                            <img src="../../img/img_service/vet.png" alt="Department Store-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container" id='cr'>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Jewelry Store</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Jewelry Store-logo" id='logito' />
                        </picture>
                    </div>
                    <div className="item-box mt-3 rounded">
                        <picture>
                            <h3>Liquor Store</h3>
                            <hr />
                            <img src="../../img/img_service/weights.png" alt="Liquor Store-logo" id='logito' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
