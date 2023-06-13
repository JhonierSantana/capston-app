import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { MainBody } from './components/MainBody.jsx';
import { FooterNav } from './components/FooterNav.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MainBody />
    <SearchBar />
    <FooterNav />
  </React.StrictMode>,
  document.getElementById('root')
);
