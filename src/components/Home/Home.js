
import React from 'react';
import Menubar from '../Distrevesion/Menubar/Menubar';
import "./Home.css";
import Banner from './../Banner/Banner'
import Services from '../Services/Services';
import About from '../About/About';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Footer from '../Distrevesion/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Category></Category>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;