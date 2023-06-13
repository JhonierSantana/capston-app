import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import '../style/App.css'
import '../style/Box.css'
import { Entertaiment } from './Entertaiment';

export const Box_content = () => {
    return (
        <div id="myCarousel" className="carousel slide">
            <Container>
                ReactDOM.render(
                    <Entertaiment />
                )
            </Container>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}