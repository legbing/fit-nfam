import React from 'react';

import Navbar from "./components/navbar";
import Slide from './components/slide';
import { SliderData } from "./components/slider_data";
import Adv from "./components/adv";
import Contact_Bar from "./components/c-bar";

function Home() {
    
    return (
        <div>
            <Navbar/>
            <Slide slides = { SliderData} />
            <Adv />
            <br />
            <hr />
            <Contact_Bar/>
        </div>
    );
}
export default Home;