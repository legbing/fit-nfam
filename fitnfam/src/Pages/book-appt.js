import React from 'react';
import FormInput from './components/form_input';
import Navbar from './components/navbar';
import Navbar1 from './components/navbar-1';
import {useNavigate, useLocation} from 'react-router-dom';
class Bookappointment1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
                doc_name: "",
                symptoms: "",
                ph_no: "",
                email_id: "",
                day: "",
                timings: "",
                is_booked: 0
        }
        
        
    }
    
    handleChange = event => {
        var name1 = event.target.name;
        var value1 = event.target.value;

        console.log(name1, value1);
        
        this.setState({
            [name1]:value1
        });
      
    }
    handleSubmit = event => {
        //event.preventDefault();
       
        //const {location} = this.props;
        const {navigate} = this.props;
        var name = this.state.doc_name;
    
        var sym = this.state.symptoms;
        var no = this.state.ph_no;
        var email = this.state.email_id;
        var day = this.state.day;
        var time = this.state.timings;
        var book_details = new Object();
        book_details.name = name;
        book_details.sym = sym;
        book_details.no = no;
        book_details.email = email;
        book_details.day = day;
        book_details.time = time;
        //var book_details = {"name":name, "sym":sym, "no":no, "email":email, "day":day, "time":time};
        console.log(name);
        console.log(name, sym, no, email, day, time);
        if(name && sym && no && email && day && time) {
            alert("Booked appointment!");
            this.state.is_booked = 1;
            navigate('/profile', {state: book_details});
        }
        else {
            alert("Some fields are empty");
        }
    }
    render(){
        var book_ap = {
            backgroundColor: "skyblue"
        };
      return(
          <div style={book_ap}>
          <Navbar1 />
        <div id="appointment">
          <h2 id="headerTitle">Book Appointment</h2>
          <div>
          <div className="row">
         <input type="text" placeholder="Doctor Name" name="doc_name" onChange={this.handleChange} required/>
         </div>  
         <div className="row">
         <input type="text" placeholder="Enter symptoms" name="symptoms" onChange={this.handleChange} required/>
         </div> 
         <div className="row">
         <input type="text" placeholder="Phone number" name="ph_no" onChange={this.handleChange} required/>
         </div> 
         <div className="row">
         <input type="email" placeholder="Enter email address" name="email_id" onChange={this.handleChange} required/>
         </div> 
         <div className="row">
         <input type="text" placeholder="Enter day" name="day" onChange={this.handleChange} required/>
         </div> 
         <div className="row">
         <input type="text" placeholder="Enter timings" name="timings" onChange={this.handleChange} required/>
         </div> 
         
         <div id="button" className="row">
            <button className="book-now" onClick={this.handleSubmit}>Book Now</button>
        </div>
       </div>
       </div>
          
        </div>
      )
    }
  }

  export default function Bookappointment(props) {
      const navigate = useNavigate();
      return(<Bookappointment1 {...props} navigate={navigate} />);
  }
//export default Bookappointment;