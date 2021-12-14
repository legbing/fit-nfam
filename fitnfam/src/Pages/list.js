import React from 'react';
import Details from './components/doctor-det1';
import pic from './assets/doctor.jpg';
import Navbar1 from './components/navbar-1';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var secStyle = {
            marginLeft: "45%",
            fontSize:"30px",
            fontFamily:"cursive"

        }
        /*
        return(
            fetch("http://localhost:3000/doctors?field={data}", {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
            .then(res => console.log(res));
        )
        */
       return (
           <div className="doctor-list-outer">
               <Navbar1 />
               <section style={secStyle}>{this.props.area}</section>
               <div className="doctor-list-inner">
                <Details doc_im={pic} name="Dr. John Smith" experience="5 yrs"/>
                <Details doc_im={pic} name="Dr. Jane Doe" experience="10 yrs"/>
                </div>
            </div>
       )
    }
}
export default List;