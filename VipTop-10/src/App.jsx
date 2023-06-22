import React from 'react';
import { AmusementParkTop } from './routes/AmusementParkTop.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import './style//index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './routes/Home.jsx';

export const App = () => {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/amusement_park_top",
    element: <AmusementParkTop />
  }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
