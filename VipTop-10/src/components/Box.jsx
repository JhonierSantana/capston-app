import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/Box.css'

export const Box_content = () => {
    return (
        <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container" id='cr'>
                        <div className="item-box rounded">Box 1</div>
                        <div className="item-box rounded">Box 2</div>
                        <div className="item-box rounded">Box 3</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container" id='cr'>
                        <div className="item-box rounded">Box 4</div>
                        <div className="item-box rounded">Box 5</div>
                        <div className="item-box rounded">Box 6</div>
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