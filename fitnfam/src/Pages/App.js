import React, { useState, useEffect } from 'react';
import {
    Routes,
    BrowserRouter as Router,
    Route,
    Navigate,
    Link
} from "react-router-dom";

import { useLocation, useNavigate } from 'react-router';
import Home from './home';
import Doctors from './doctors';
import List from './list';
import Register from './register/register';
import Bookappointment from './book-appt';
import Profile from './profile';
import Login from './login/login';
import About from './about/about';
import MentalHealth from './mental_health';
export default function App() {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();
    console.log(user);

    
    /*
    useEffect(() => {
        if(!user) {
            navigate('/login');
         }
        })
    
*/
    return (
        
             
            <Routes>
                
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}></Route>
                {/*
                <Route path = "/register" element={<Register/>}></Route>
            <Route exact path = "/" render={() => (
                 user && user._id ? (<Route element={<Home/>}/>)
                 : (<Route element={<Login/>}/>)
            )}
            
            ></Route>*/}
            <Route path = "/doctors" element={<Doctors/>}></Route>
            {/*}
            <Route path="/login" render={()=> (<Route element={<Login setLoginUser={setLoginUser}/>}/>)}></Route>*/}
            <Route path="/register" element={<Register/>}></Route>
            <Route path = "/doctors/field/dentist" element={<List area = "Dentists"/>}></Route>
            <Route path = "/doctors/field/neurologist" element={<List area = "Neurologists"/>}></Route>
            <Route path = "/doctors/field/ortho" element={<List area = "Orthopaedicians"/>}></Route>
            <Route path="/doctors/book" element={<Bookappointment/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/mental-health" element={<MentalHealth/>}></Route>
            </Routes>
       
    )
}