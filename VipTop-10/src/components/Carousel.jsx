import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css';
import '../style/Box.css';
import { Entertainment } from './Entertainment';
import { Attractions } from './Attractions';
import { Food } from './Food';
import { Shopping } from './Shopping';
import { Service } from './Service';

export const Carousel = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Entertainment />
                    </div>
                    <div className="carousel-item">
                        <Attractions />
                    </div>
                    <div className="carousel-item">
                        <Food />
                    </div>
                    <div className="carousel-item">
                        <Shopping />
                    </div>
                    <div className="carousel-item">
                        <Service />
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
        </>
    );
};