import React from 'react';
import Card from './components/doctor_card';
import logo from './assets/doctor.jpg';
import dentist from './assets/dental.jpg';
import neuro from './assets/neurologist.jpg';
import ortho from './assets/orthopaedic.jpg';
import { Link } from 'react-router-dom';
import Navbar1 from './components/navbar-1';
function Doctors() {
    var h1style = {
        textAlign: "center",
        color: "blue",
        display: "inline-block",
        marginLeft: 40
    };
    return (
        <div>
            <Navbar1 />
        
        <article>
            
            <h1 style={h1style} align="center">Doctors in Top Specialities</h1>
            <section className="fields">
            <Link to = {{
                pathname: "/doctors/field/dentist"
                
            }}><Card image={dentist} name="Dentists" /></Link>
            <Link to = {{
                pathname: "/doctors/field/neurologist"
            }}><Card image={neuro} name="Neurologists" /></Link>
            <Link to = {{
                pathname: "/doctors/field/ortho"
            }}>
            <Card image={ortho} name="Orthopaedicians" /></Link>
            {/*
            <Card image={logo} name="Orthopedecians" />
            <Card image={logo} name="Opthalmologists" />
            <Card image={logo} name="Cardiologists" />
            <Card image={logo} name="ENTs" />
            <Card image={logo} name="Surgeons" />
            */}
            </section>
        </article>
        </div>
    );
}
export default Doctors;