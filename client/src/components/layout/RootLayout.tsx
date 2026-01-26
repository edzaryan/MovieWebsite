import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
    return (
        <>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;