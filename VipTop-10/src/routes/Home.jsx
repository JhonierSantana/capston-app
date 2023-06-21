import React from 'react';
import { Headerbar } from '../components/HeaderBar.jsx';
import { MainBody } from '../components/MainBody.jsx';
import { FooterNav } from '../components/FooterNav.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Box_content } from '../components/Box.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import '../style//index.css';

export const Home = () => {
    return (
        <>
            <Headerbar />
            <MainBody />
            <SearchBar />
            <Box_content />
            <FooterNav />
        </>
    )
};