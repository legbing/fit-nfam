import React from 'react';
import im1 from './assets/yoga1.jpg'
import im2 from './assets/yoga2.jpg'
import im3 from './assets/yoga3.jpg'
import Navbar1 from './components/navbar-1';
import "./mental_health.css";
export default function Mentalhealth () {
    return(
        <div>
        <div className="container des">
            <Navbar1 />
            <div className="row">
                <div className="col-md-4">
                    <img src={im2} alt="Join Helpgroup"/>
                    <h5></h5>
                </div>
                <div className="col-md-6">
                    <img src={im3} alt="Live sessions"/>
                </div>
                <div className="col-md-8">
                    <img src={im1} alt="Yoga videos"/>
                </div>
            </div>
            <div className="row">
                <h1>Mental health</h1>
                <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.

                </p>
                <p>Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:</p>
                <li>Biological factors, such as genes or brain chemistry</li>
                <li>Life experiences, such as trauma or abuse</li>
                <li>Family history of mental health problems</li>
            </div>
            </div>
        </div>
    )
}