import React from 'react';
import Footer from '../components/Footer/Footer';
import Container from '../Container/Container';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <Container>
            <Navbar></Navbar>
        </Container>
        <Outlet></Outlet>
        <div className='bg-neutral'>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
        </>
    );
};

export default MainLayout;