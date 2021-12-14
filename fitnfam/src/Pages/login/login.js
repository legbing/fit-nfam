import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/2.png';

import { useNavigate } from 'react-router-dom';
import Register from '../register/register';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
const Login = () => {
    const navigate = useNavigate();
    const labelStyle = {
        
        paddingLeft: "4.5rem",
        paddingBottom:"0.5rem",
        color: "blue",
        fontWeight: 500,
        fontSize: 20,
        fontFamily: "sans-serif"
    }
    const registerStyle={
        color:"violet",
        fontFamily:"calibri",
        fontSize: 15
    }
    var reg_style = {
        maxWidth: "500",
          minWidth: "300",
          maxHeight: "700",
          width: "30%",
          height: "60%",
          margin: "100px auto",
          backgroundColor:"skyblue",
          borderRadius: "25",
          
      }
      var bodySt = {
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + logo + ")"
      }
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    /*
    constructor(props) {
        super(props);
        this.state = {user: {
       
            name:"",
            password:""
        }
             
    }
    }*/
    const handleChange = e => {
        var name1 = e.target.name;
        var value1 = e.target.value;
        //console.log(name1, value1);
        setUser({
            ...user,
            [name1]:value1
        });
    }
    const handleSubmit =()=> {
        //console.log(user.username, user.password);
        if(user.username && user.password) {
        axios.post("http://localhost:5000/login", user)
        .then(res=>{
            
            res.data.message === "Login success" ? navigate("/", {state: {user}})
             : alert(res.data.message)
        //setLoginUser(res.data.user)
        //navigate("/")})
        
        });
    }
    else {
        alert("Invalid input");
    }
}
    
        return(
          <div style={bodySt}> <Navbar/>
          <div id="loginform" style={reg_style}>
             
            <h2 id="headerTitle">Login</h2>
            <div className="row">
            <label className="labels" style={labelStyle}>Username</label>
            <input type="text" name="username" onChange={handleChange} placeholder="Enter your username: "/>
            </div>  
            <div className="row">
            <label className="labels" style={labelStyle}>Password</label>
            <input type="password" name="password" onChange={handleChange} placeholder="Enter your password: "/>
            </div>  
            <div id="button" className="row">
        <button onClick={handleSubmit}>Log In</button>
        <p style={registerStyle}>Not registered yet?</p> <Link to ="/register" element={<Register/>}>Click here</Link>
        </div>
      
          </div>
          </div>
        )
      
}
export default Login;