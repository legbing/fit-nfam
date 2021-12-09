import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Details extends React.Component {
    constructor(props) {
        super(props);
    }
    book =() =>
    {
        //let path = 'to-be-filled';
        //let history = useHistory();
        //history.push(path);

    }
    
    render() {
        var h1style = {
            fontFamily: "sans-serif",
            fontSize: 40
        }
        var h3style = {
            fontFamily: "sans-serif",
            fontSize: 25
        }
        return (
            <article className="doctor-det">
                <div className="pic-div">
                    <img src={this.props.doc_im}></img>
                </div>
                <div className="det-div">
                    <h1 style={h1style}>{this.props.name}</h1>
                    <h3 style={h3style}>{this.props.experience} of experience</h3>
                    <p>Available through Mon-Fri</p>
                    <Link to = {{
                    pathname: "/doctors/book",
                    state: this.props.name
                    }}><button className="book-appt" onClick={this.book}>Book appointment</button></Link>
                </div>
            </article>
        )
    }
}
export default Details;