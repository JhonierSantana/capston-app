import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { Searchpage } from './Searchpage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import '../src/style//index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>Error</h1>
},
{
  path: "/search",
  element: <Searchpage />
}]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
