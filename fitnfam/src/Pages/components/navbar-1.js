import React from 'react';
import logo from '../assets/logo512.png';
import Profile from '../profile';
import {Link} from 'react-router-dom';
import logo_2 from '../assets/2.png';

class Navbar1 extends React.Component{
    render()
            {
                var headStyle = {
                    left: 0,
                    top: 0,
                    padding: 10,
                    display: 'flex'
                };
                var linkStyle = {
                    margin: 10,
                    fontSize: 20,
                    textDecoration: 'none'
                };
                var buttonStyle = {
                    padding: 10,
                    borderRadius: 30,
                    backgroundColor: "blue"

                };
                var div2Style = {
                    display: 'inline-block',
                    width: '50%',
                    marginLeft: '45%'
                }
                var div1Style = {
                    display: 'flex',
                    width: '50%'

                }
                var hstyle = {
                    fontFamily: 'comic-sans',
                    color: 'blue',
                    marginLeft: '20px'
                }
                return(
                    <header style={headStyle}>
                        <div style={div1Style}>
                            <a href = "/"><img src={logo_2} alt = "logo" width="55" height="55"/></a>
                            <h1 style={hstyle}>Fit'nFam</h1>
                        </div>
                        
                        <div style={div2Style}>
                            <a href="/about" style={linkStyle}>About</a>
                            <a href="/mental-health" style={linkStyle}>Mental Health</a>
                            <a href="/doctors" href = "/doctors" style={linkStyle}>Doctors</a>
                            <Link to = "/profile" element={<Profile/>}><button style={buttonStyle}>User name</button></Link>
                        </div>
                    </header>
                );
            };
}

export default Navbar1;