import React from "react";
import NavBar from "./NavBar";
import "./style.css";
import Header from "./Header";
import Portfoliosection from "./Portfoliosection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import ProtfolioModals from './ProtfolioModals';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Portfoliosection/>
            <About/>
            <Contact/>
            <Footer/>
            <ProtfolioModals/>
            <Copyright/>
        </div>
    )
}

export default App;