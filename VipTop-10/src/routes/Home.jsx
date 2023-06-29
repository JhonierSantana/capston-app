// This file builds the main page of the application using Headerbar,
//    MainBody, SearchBar and FooterNav as components.
import React from 'react';
import { Headerbar } from '../components/HeaderBar.jsx';
import { MainBody } from '../components/MainBody.jsx';
import { FooterNav } from '../components/FooterNav.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import '../style//index.css';

export const Home = () => {
  return (
    <>
      <Headerbar />
      <MainBody />
      <SearchBar />
      <FooterNav />
    </>
  )
};