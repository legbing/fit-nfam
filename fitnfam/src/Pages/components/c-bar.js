import React from "react";
import About from '../about/about';
import Doctors from "../doctors";
import {Link} from 'react-router-dom';
class Contact_Bar extends React.Component {

    render() {
        var art = {
            display:'flex',
            position:'relative'
        }
        var art_out = {
            margin: 5
        }
        var sec2Style = {
            margin: 20,
            marginLeft: "45%",
            display:'inline-block'
        }
        var sec1Style = {
            margin: 20,
            marginLeft: "5%",
            display:'inline-block'
        }
        var pStyle = {
            color:"grey",
            marginLeft: "40%"
        }
        return(
            <article style={art_out}>
            <article style={art}>
                <section style={sec1Style}>
                    <p>Pages</p><hr/>
                    
                    <p><a href = '/about' style={{textDecoration: "none",color:"black"}}>About us</a></p>
                    <p><a href = '/doctors' style={{textDecoration: "none",color:"black"}}>Doctors</a></p>
                   
                    <p>Mental Health</p>
                </section>
                <section style={sec2Style}>
                    <p>Contact Us </p><hr/>
                    <p>Sonal Gabburi - sonal@gmail.com</p>
                    <p>Spoorthi K S - spoorthi@gmail.com</p>
                    <p>Srushti S Hampannavar - srushti@gmail.com</p>
                </section>
                </article>
                <section>
                <hr/>
                
                <p style={pStyle}>Fit'nFam. No Rights Reserved. </p>
                </section>
            
            </article>
        );
    }
}

export default Contact_Bar;