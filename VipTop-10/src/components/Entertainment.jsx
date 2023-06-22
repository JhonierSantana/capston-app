import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/App.css';
import '../style/Box.css';
import { Link } from 'react-router-dom';

export const Entertainment = () => {

  return (
    <div className="container" id="cr">
      <Link className='top_list' to={"amusement_park_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Amusement Park</h3>
            <hr />
            <img src="../../img/img_entertaiment/roller-coster.png" alt="Amusement Park-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"bowling_alley_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Bowling Alley</h3>
            <hr />
            <img src="../../img/img_entertaiment/bowling-ball.png" alt="Bowling Alley-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"casino_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Casino</h3>
            <hr />
            <img src="../../img/img_entertaiment/slot-machine.png" alt="Casino-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"movie_theater_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Movie Theater</h3>
            <hr />
            <img src="../../img/img_entertaiment/film-reel.png" alt="Movie Theater-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"night_club_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Night Club</h3>
            <hr />
            <img src="../../img/img_entertaiment/disco-ball.png" alt="Night Club-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"stadium_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Stadium</h3>
            <hr />
            <img src="../../img/img_entertaiment/stadium.png" alt="Stadium-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"beauty_salon_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Beauty Salon</h3>
            <hr />
            <img src="../../img/img_entertaiment/salon.png" alt="Beauty Salon-logo" id='logito' />
          </picture>
        </div>
      </Link>
      <Link className='top_list' to={"spa_top"}>
        <div className="item-box mt-3 rounded-4">
          <picture>
            <h3>Spa</h3>
            <hr />
            <img src="../../img/img_entertaiment/spa.png" alt="Spa" id='logito' />
          </picture>
        </div>
      </Link>
    </div>
  );
};
