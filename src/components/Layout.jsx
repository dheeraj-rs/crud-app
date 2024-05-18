import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default Layout;
