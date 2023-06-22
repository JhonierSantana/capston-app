import React from 'react';
import { AmusementParkTop } from './routes/Entertainment/AmusementParkTop.jsx';
import { BowlingAlleyTop } from './routes/Entertainment/BowlingAlleyTop.jsx';
import { CasinoTop } from './routes/Entertainment/CasinoTop.jsx';
import { MovieTheaterTop } from './routes/Entertainment/MovieTheaterTop.jsx';
import { NightClubTop } from './routes/Entertainment/NightClubTop.jsx';
import { StadiumTop } from './routes/Entertainment/StadiumTop.jsx';
import { BeautySalonTop } from './routes/Entertainment/BeautySalonTop.jsx';
import { SpaTop } from './routes/Entertainment/SpaTop.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import './style//index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './routes/Home.jsx';

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error</h1>
    },
    {
      path: "/amusement_park_top",
      element: <AmusementParkTop />
    },
    {
      path: "/bowling_alley_top",
      element: <BowlingAlleyTop />
    },
    {
      path: "/casino_top",
      element: <CasinoTop />
    },
    {
      path: "/movie_theater_top",
      element: <MovieTheaterTop />
    },
    {
      path: "/night_club_top",
      element: <NightClubTop />
    },
    {
      path: "/stadium_top",
      element: <StadiumTop />
    },
    {
      path: "/stadium_top",
      element: <StadiumTop />
    },
    {
      path: "/beauty_salon_top",
      element: <BeautySalonTop />
    },
    {
      path: "/spa_top",
      element: <SpaTop />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
