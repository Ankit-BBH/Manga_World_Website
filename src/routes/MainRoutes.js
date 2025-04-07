import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../components/Layout/Layout';
import ListGenres from '../pages/ListGenres';
import ListManga from '../pages/ListManga';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="manga" element={<ListManga />} />
                <Route path="genres" element={<ListGenres />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
