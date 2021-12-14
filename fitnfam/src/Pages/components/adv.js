import React from 'react';
import pic from '../assets/doctor-1.jpg';

export default class Adv extends React.Component {
    render() {
        return(
            <article className = "ad-bar">
                <img src = {pic} className="ad-pic" />
                <div className="ad-bar-right">
                    <h1 className="get-treated">Get Treated By the Best</h1>
                    <h1 className = "choose">Choose from a list of over 500 doctors</h1>
                    <a href = "/doctors"><button className="start">Start</button></a>
                </div>
            </article>
        );
    }
}