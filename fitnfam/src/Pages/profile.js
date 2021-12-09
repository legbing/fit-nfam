import React from "react";
import react from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Bookappointment from "./book-appt";
import Navbar1 from "./components/navbar-1";


const Profile = () => {
    /*constructor(props) {
        super(props);
        
        this.state= {name: "", email: "", appt_booked: [], count: show_det.show()};
    }
    */
    const location = useLocation();
    const book_details = location.state;
    const navigate = useNavigate();
    console.log(book_details);
    var name = book_details.name;
    
        return(
            <div className="profile">
                <Navbar1/>
                {/*
                <h1>Username: {this.state.name}</h1>
                <h1>Email ID: {this.state.email}</h1>
                <h1>Appointments booked: {this.state.appt_booked}</h1>
                <h1>Number of appointments: {this.state.count}</h1>
                */}
                <div className="appt-card">
                <h1>Booking details: </h1>
                <h3>Doctor Name: {book_details.name} </h3>
                <hr/>
                <h2>Patient details: </h2>
                <h3>Phone number: {book_details.no} </h3>
                <h3>Email Address: {book_details.email} </h3>
                <h3>Symptoms: {book_details.sym} </h3>
                <hr/>
                <h2>Appointment details:</h2>
                <h3>Date of appointment: {book_details.day} </h3>
                <h3>Time of appointment: {book_details.time} </h3>
                </div>
            </div>
        )
    
}
export default Profile;