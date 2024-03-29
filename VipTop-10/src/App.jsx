// This file contains all the routes that the application
//    uses and that leads to each of the pages.
import React from 'react';
import { AmusementParkTop } from './routes/Entertainment/AmusementParkTop.jsx';
import { BowlingAlleyTop } from './routes/Entertainment/BowlingAlleyTop.jsx';
import { CasinoTop } from './routes/Entertainment/CasinoTop.jsx';
import { MovieTheaterTop } from './routes/Entertainment/MovieTheaterTop.jsx';
import { NightClubTop } from './routes/Entertainment/NightClubTop.jsx';
import { StadiumTop } from './routes/Entertainment/StadiumTop.jsx';
import { BeautySalonTop } from './routes/Entertainment/BeautySalonTop.jsx';
import { SpaTop } from './routes/Entertainment/SpaTop.jsx';
import { AquariumTop } from './routes/Attractions/AquariumTop.jsx';
import { ArtGalleryTop } from './routes/Attractions/ArtGalleryTop.jsx';
import { MuseumTop } from './routes/Attractions/MuseumTop.jsx';
import { TouristAttractionTop } from './routes/Attractions/TouristAttractionTop.jsx';
import { ZooTop } from './routes/Attractions/ZooTop.jsx';
import { BakeryTop } from './routes/Food/BakeryTop.jsx';
import { BarTop } from './routes/Food/BarTop.jsx';
import { CafeTop } from './routes/Food/CafeTop.jsx';
import { MealTakeawayTop } from './routes/Food/MealTakeawayTop.jsx';
import { RestaurantTop } from './routes/Food/RestaurantTop.jsx';
import { BookStoreTop } from './routes/Shopping/BookStoreTop.jsx';
import { ConvStoreTop } from './routes/Shopping/ConvStoreTop.jsx';
import { DepStoreTop } from './routes/Shopping/DepStoreTop.jsx';
import { JewelryStoreTop } from './routes/Shopping/JewelryStoreTop.jsx';
import { LiquorStoreTop } from './routes/Shopping/LiquorStoreTop.jsx';
import { CarRentalTop } from './routes/TopService/CarRentalTop.jsx';
import { GymTop } from './routes/TopService/GymTop.jsx';
import { PharmacyTop } from './routes/TopService/PharmacyTop.jsx';
import { VeterinaryCareTop } from './routes/TopService/VeterinaryCareTop.jsx';
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
    {
      path: "/aquarium_top",
      element: <AquariumTop />
    },
    {
      path: "/art_gallery_top",
      element: <ArtGalleryTop />
    },
    {
      path: "/museum_top",
      element: <MuseumTop />
    },
    {
      path: "/tourist_attraction_top",
      element: <TouristAttractionTop />
    },
    {
      path: "/zoo_top",
      element: <ZooTop />
    },
    {
      path: "/bakery_top",
      element: <BakeryTop />
    },
    {
      path: "/bar_top",
      element: <BarTop />
    },
    {
      path: "/cafe_top",
      element: <CafeTop />
    },
    {
      path: "/meal_takeaway_top",
      element: <MealTakeawayTop />
    },
    {
      path: "/restaurant_top",
      element: <RestaurantTop />
    },
    {
      path: "/book_store_top",
      element: <BookStoreTop />
    },
    {
      path: "/conv_store_top",
      element: <ConvStoreTop />
    },
    {
      path: "/dep_store_top",
      element: <DepStoreTop />
    },
    {
      path: "/jewelry_store_top",
      element: <JewelryStoreTop />
    },
    {
      path: "/liquor_store_top",
      element: <LiquorStoreTop />
    },
    {
      path: "/car_rental_top",
      element: <CarRentalTop />
    },
    {
      path: "/gym_top",
      element: <GymTop />
    },
    {
      path: "/pharmacy_top",
      element: <PharmacyTop />
    },
    {
      path: "/veterinary_care_top",
      element: <VeterinaryCareTop />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
