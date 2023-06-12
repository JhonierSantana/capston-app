import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
// import { MainBody } from './components/MainBody.jsx';
// import { SearchBar } from './components/SearchBar.jsx';
// import { FooterNav } from './components/FooterNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <>
//     <MainBody />
//     <SearchBar />
//   </>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <FooterNav />
//   </>,
//   document.getElementById('footer-navbar')
// );
