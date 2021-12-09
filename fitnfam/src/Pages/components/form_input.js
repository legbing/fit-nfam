import React from "react";

const FormInput = props => (
    <div class="row">
      <input type={props.type} placeholder={props.placeholder} onChange={this.handleChange}/>
    </div>  
  );

export default FormInput;