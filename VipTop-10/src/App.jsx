import React from 'react';
import { Searchpage } from './routes/Searchpage.jsx';
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
    path: "/search",
    element: <Searchpage />
  }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
