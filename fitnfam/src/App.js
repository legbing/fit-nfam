import React from "react";
import Navbar from './components/navbar';
import Slide from './components/slide';
import { SliderData } from "./components/slider_data";
import Adv from "./components/adv";
import ContactBar from "./components/c-bar";

function App() {
    return (
        <div>
            <Navbar/>
            <Slide slides = { SliderData} />
            <Adv />
            <ContactBar />
        </div>
    );
}
export default App;