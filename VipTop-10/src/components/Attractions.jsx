import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'

export const Attractions = () => {
    return (
        <div className="container" id='cr'>
            <div className="item-box mt-3 rounded">
                <picture>
                    <h3>Aquarium</h3>
                    <hr />
                    <img src="../../img/img_attractions/aquarium.png" alt="Aquarium-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded">
                <picture>
                    <h3>Art Gallery</h3>
                    <hr />
                    <img src="../../img/img_attractions/gallery.png" alt="Art Gallery-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded">
                <picture>
                    <h3>Museum</h3>
                    <hr />
                    <img src="../../img/img_attractions/museum.png" alt="Museum-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded">
                <picture>
                    <h3>Tourist Attraction</h3>
                    <hr />
                    <img src="../../img/img_attractions/statue-of-liberty.png" alt="Tourist Attraction-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded">
                <picture>
                    <h3>Zoo</h3>
                    <hr />
                    <img src="../../img/img_attractions/zoo.png" alt="Zoo-logo" id='logito' />
                </picture>
            </div>
        </div>
    )
}
