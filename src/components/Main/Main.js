import { Outlet } from "react-router-dom";
// Helpers
// Components
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function Main({
    component: Component,
    ...rest
}) {
    return (
        <>
            <Header />
            <main className={`content-wrapper`}>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
