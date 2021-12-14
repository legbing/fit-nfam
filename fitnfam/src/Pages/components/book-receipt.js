import React from 'react';

export default function Book_Receipt(book_details) {
    return (
        <div>
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
    )
}