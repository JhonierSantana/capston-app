import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css'
import '../style/Box.css'
import { useNavigate } from "react-router-dom";

export const Shopping = () => {
    const navigate = useNavigate();

    function SearchClick() {
        navigate('/search')
    }
    return (
        <div className="container" id='cr'>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Book Store</h3>
                    <hr />
                    <img src="../../img/img_Shopping/book.png" alt="Book Store-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Conv. Store</h3>
                    <hr />
                    <img src="../../img/img_Shopping/convenience-store.png" alt="Convenience Store-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Dep. Store</h3>
                    <hr />
                    <img src="../../img/img_Shopping/department.png" alt="Department Store-logo" id='logito' />
                </picture>
            </div>

            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Jewelry Store</h3>
                    <hr />
                    <img src="../../img/img_Shopping/jewelry.png" alt="Jewelry Store-logo" id='logito' />
                </picture>
            </div>
            <div className="item-box mt-3 rounded-4" onClick={SearchClick}>
                <picture>
                    <h3>Liquor Store</h3>
                    <hr />
                    <img src="../../img/img_Shopping/wine.png" alt="Liquor Store-logo" id='logito' />
                </picture>
            </div>
        </div>
    )
}
