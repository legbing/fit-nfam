import React from 'react';
import Card from './components/doctor_card';
import logo from './assets/doctor.jpg';

function Doctors() {
    var h1style = {
        textAlign: "center",
        color: "blue",
        display: "inline-block",
        marginLeft: 40
    };
    return (
        <article>
        <h1 style={h1style} align="center">Doctors in Top Specialities</h1>
        <section className="fields">
        <Card image={logo} name="Dentists" />
        <Card image={logo} name="Neurologists" />
        <Card image={logo} name="Gynecologists" />
        <Card image={logo} name="Orthopedecians" />
        <Card image={logo} name="Opthalmologists" />
        <Card image={logo} name="Cardiologists" />
        <Card image={logo} name="ENTs" />
        <Card image={logo} name="Surgeons" />
        
        </section>
        </article>
    );
}
export default Doctors;