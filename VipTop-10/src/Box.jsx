import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Box.css'

export const Box_content = () => {
    return (
        <div id="myCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container d-flex">
                        <div class="item-box rounded">Box 1</div>
                        <div class="item-box rounded">Box 2</div>
                        <div class="item-box rounded">Box 3</div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container d-flex">
                        <div class="item-box rounded">Box 4</div>
                        <div class="item-box rounded">Box 5</div>
                        <div class="item-box rounded">Box 6</div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}