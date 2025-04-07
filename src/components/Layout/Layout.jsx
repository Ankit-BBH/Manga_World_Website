import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
       <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
