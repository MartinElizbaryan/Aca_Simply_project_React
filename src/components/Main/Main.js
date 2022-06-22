import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ScrollTopButton } from "../Shared/Buttons/ScrollTopButton/ScrollTopButton";
import { scrollToTop } from "../../helpers/utils";

export default function Main({ component: Component, ...rest }) {
    const [visible, setVisible] = useState(false)
    const [auth, setAuth] = useState(false);
    
    /* const changeAuth = () => {
        //let changedAuth = someFunction();
        setAuth(changedAuth)
    } */

    //let auth = localStorage.getItem("auth")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (
        <>
            <Header setAuth={setAuth} />
            <main className={`content-wrapper`}>
                <Outlet />
            </main>
            <Footer />
            {visible && <ScrollTopButton onClick={scrollToTop} />}
        </>
    );
}
