import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
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
        axios.post("http://localhost:5000/login", user)
        .then(res=>{console.log(res)
        //setLoginUser(res.data.user)
        //navigate("/")})
    });
}
    
        return(
          <div id="loginform">
            <h2 id="headerTitle">Login</h2>
            <div className="row">
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} placeholder="Enter your username: "/>
            </div>  
            <div className="row">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} placeholder="Enter your password: "/>
            </div>  
            <div id="button" className="row">
        <button onClick={handleSubmit}>Log In</button>
      </div>
      <div id="Login_in_through">
        <label>Or sign in with:</label>
        <div id="iconGroup">
        <a href="#" id="facebookIcon"></a>
        <a href="#" id="googleIcon"></a>
        </div>
      </div>
          </div>
        )
      
}
export default Login;