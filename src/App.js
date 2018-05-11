import React, {Component} from 'react';

import './App.css'
import './vendor/css/bootstrap.min.css'
import Header from "./Header/Header";
import Hero from "./Hero/Hero"
import Social from "./Social/Social"
import Resume from "./Resume/Resume"
import Resume2 from "./Resume/Resume2"
import Review from "./Review/Review"
import Portfolio from "./Portfolio/Portfolio"
import Extra from "./Extra/Extra"
import Thanks from "./Thanks/Thanks"
import Footer from "./Footer/Footer"
import Preloder from './Preloder/Preloder'

class App extends Component {
    render() {
        return (
            <div className="home-two-style">
                <Preloder/>
                <Header/>
                <Hero/>
                <Social/>
                <Resume/>
                <Resume2/>
                <Review/>
                <Portfolio/>
                <Extra/>
                <Thanks/>
                <Footer/>
            </div>
        );
    }
}

export default App;
