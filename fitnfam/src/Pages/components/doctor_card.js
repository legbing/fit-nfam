import React from 'react';

class Card extends React.Component {
    
    render() {
        /*
        var imgStyle = {
            width: 200,
            borderRadius: 15,
            marginLeft: 80,
            marginRight: 80
        };
        */
       var h1style = {
           marginTop: 120,
           fontSize: 30,
           fontFamily: 'cursive'
       }
        return (
            <div className="field-card">
            <div className="field-card-inner">
                <div className="field-card-front">
                    <img src={this.props.image} class="img-field"/>
                </div>
                <div className="field-card-back">
                    <h1 align="center" style={h1style}>{this.props.name}</h1>
                </div>
            </div>
            </div>
        )
    }
}
export default Card;