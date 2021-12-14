import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import logo from '../assets/2.png';
//import './register.css';
import Navbar from '../components/navbar';
import Login from '../login/login';
import {Link} from 'react-router-dom';
class Register1 extends React.Component {
  
  constructor(props) {
      super(props);
    
      this.state = {user:{
          name:"",
          email:"",
          password:""
      }};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
    var name1 = event.target.name;
    var value1 = event.target.value;
    if(name1 === "email") {
      this.setState({email: this.state.user.email});
    }
    
    this.setState({
        ...this.state.user,
        user:{
            ...this.state.user,
            [name1]: value1
        }
        
    })
    
}

handleSubmit(event) {
    event.preventDefault();
    
    const {name, email, password} = this.state.user;
    console.log(name, email, password);
    if(name && email && password) {
        axios.post("http://localhost:6969/register")
        .then(res=>console.log(res));
        //useNavigate('/login');
    }
    else {
        alert("Invalid input");
    }
}
render() {
  var labelStyle = {
        
    paddingLeft: "3.0rem",
    paddingBottom:"0.5rem",
    color: "blue",
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "sans-serif"
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
    alignItems: "center"
}
var bodySt = {
  backgroundImage: "url(" + logo + ")"
}
const loginStyle={
  color:"violet",
  fontFamily:"calibri",
  fontSize: 15
}
    return (
      <div style={bodySt}>
        <Navbar />
      <div style={reg_style} className="loginform">
        
      <h2 id="headerTitle">Register</h2>
            <form onSubmit={(event)=>{
              event.preventDefault();
              const {navigate} = this.props;
              const {name, email, password} = this.state.user;
              //alert("Output: " + name + email + password);
              if(name && email && password) {
                  axios.post("http://localhost:5000/register", this.state.user)
                  .then(res=> {
                    res.data.message === "Registration Successful" ? navigate("/login")
                  : alert(res.data.message)
              })}
              else {
                  alert("Invalid input");
              }
            }}>
            <div className="row"> 
            <label style={labelStyle}>Enter Username:</label> 
            <input type = "text" name="name" value={this.state.user.name} onChange={(e)=>{
              var name = e.target.name;
              var value = e.target.value; 
              console.log(name, value);
              if(name === "name") {
                this.setState({name: this.state.user.name});
              }
              
            this.setState({
              ...this.state.user,
              user:{
                  ...this.state.user,
                  [name]: value
              }
              })
              }} placeholder="Full Name"/></div>
            <br/>
            <div className="row">
            <label style={labelStyle}>Enter Email: </label>
            <input type = "email" name="email" value={this.state.user.email} onChange={this.handleChange} placeholder="Email address"/></div>
            <br/>
            <div className="row">
            <label style={labelStyle}>Enter password: </label><br/>
            <input type = "password" name="password" value={this.state.user.password} onChange={(e)=>{
              var name = e.target.name;
              var value = e.target.value; 
              console.log(name, value);
              if(name === "password") {
                this.setState({password: this.state.user.password});
              }
              
            this.setState({
              ...this.state.user,
              user:{
                  ...this.state.user,
                  [name]: value
              }
              })
              }} placeholder="Password"/>
            <br/>
              </div>
              <div className="row">
            <button>Register</button>
            
            <p style={loginStyle}>Already registered? </p> <Link to ="/login" element={<Login/>}>Click here to login</Link>
            </div>
            </form>
        </div>
        </div>
    );
}

  }

  export default function Register(props) {
    const navigate = useNavigate();
    return(<Register1 {...props} navigate={navigate} />);
}