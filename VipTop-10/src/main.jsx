// This file is connected to index.html through the 'root' id
//    and is the bridge that connects to the entire application.
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import '../src/style//index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
