import React from "react";
import "./about.css";
import Navbar1 from "../components/navbar-1";
import image from '../assets/about-us.jpeg';
function About(){
    return(<div>
      <Navbar1/>
      <div className="about1">
        
        <section className="about">
          
            <h1 align="center">About us page</h1>
            <img src={image} className="about_us"/>
            <p className="about2">Looking for a trusted and secured online healthcare website in India?
    book an appointment online on fitnfam for any health concern. Our pool of over 10,000 trusted 
    doctors across 5+ specialties will ensure all your health queries are answered. 
    You can get  advice from a orthopedician,opthamlologist,cardiologist,ENT,surgeon and many more.
      </p>
    </section>
    <section className="our-team">
      <h1>Our team: </h1>
      <div className="member">
        <p>Name: Sonal Gabburi</p>
        <p>Phone No.: 1234567891</p>
        <p>Email ID: sonal@gmail.com</p>
        
        <p>Address: Banashankari, Bangalore</p>
      </div>
      <div className="member">
        <p>Name: Spoorthi K S</p>
        <p>Phone No.: 1234565461</p>
        <p>Email ID: spoorthi@gmail.com</p>
        
        <p>Address: Malleshwaram, Bangalore</p>
      </div>
      <div className="member">
        <p>Name: Srushti S Hampannavar</p>
        <p>Phone No.: 8564567891</p>
        <p>Email ID: srushti@gmail.com</p>
        
        <p>Address: Girinagar, Bangalore</p>
      </div>
    </section>
    </div>
    </div>
    )
}
export default About