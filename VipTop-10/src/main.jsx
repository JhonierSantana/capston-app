import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { FooterNav } from './FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

ReactDOM.render(
  <>
    <FooterNav />
  </>,
  document.getElementById('footer-navbar')
);
