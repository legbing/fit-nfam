import React from 'react';
import logo from '../assets/logo512.png';


class Navbar extends React.Component{
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
                    borderRadius: 10,
                    backgroundColor: "blue"

                };
                var div2Style = {
                    display: 'inline-block',
                    width: '50%',
                    marginLeft: '55%'
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
                            <img src={logo} alt = "logo" width="55" height="55"/>
                            <h1 style={hstyle}>Fit'nFam</h1>
                        </div>
                        
                        <div style={div2Style}>
                            <a href="#About" style={linkStyle}>About</a>
                            <a href="#Contact" style={linkStyle}>Contact</a>
                            <a href="#Doctors" href = "/doctors" style={linkStyle}>Doctors</a>
                            <button style={buttonStyle}>Get Started</button>
                        </div>
                    </header>
                );
            };
}

export default Navbar;