import React from 'react';
import {Outlet} from "react-router-dom";
// Helpers
// Components
import Header from '../header/header'
import Footer from '../footer/footer'

export default function Main({
    component: Component,
    ...rest
}) {
    return (
        <>
            <Header/>
            <div className={`content-wrapper`}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}
