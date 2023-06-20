import React from 'react';
import { Headerbar } from './components/HeaderBar.jsx';
import { FooterNav } from './components/FooterNav.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { Box_content } from './components/Box.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import '../src/style//index.css';

export const Searchpage = () => {
    return (
        <>
            <Headerbar />
            <SearchBar />
            <Box_content />
            <FooterNav />
        </>
    )
};
