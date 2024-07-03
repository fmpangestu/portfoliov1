import React, {useEffect} from 'react'
import Header from './components/Header'
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Header/>
            <Navigation/>
            <Banner/>
            <Profile/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default App
