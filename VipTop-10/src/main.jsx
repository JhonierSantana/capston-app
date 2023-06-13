import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { MainBody } from './components/MainBody.jsx';
import { FooterNav } from './components/FooterNav.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { Box_content } from './components/Box.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import '../src/style//index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MainBody />
    <SearchBar />
    <Box_content />
    <FooterNav />
  </React.StrictMode>,
  document.getElementById('root')
);
