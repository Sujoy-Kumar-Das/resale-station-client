import React from 'react';
import Header from '../../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import FooterSection from '../../pages/shared/footer/FooterSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;