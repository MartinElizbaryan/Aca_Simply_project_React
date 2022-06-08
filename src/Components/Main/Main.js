import {Outlet} from "react-router-dom";
// Helpers
// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Main({
    component: Component,
    ...rest
}) {
    return (
        <>
            <Header/>
            <main className={`content-wrapper`}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
