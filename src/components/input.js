import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

class Input extends Component {
  
  render() {
    let element, label;
    
    if(this.props.label !== ""){
      label = <label>{this.props.label}</label>;
    }

    switch(this.props.type){
      case "radio":
      let count = 0;
        element = this.props.radioValues.map((radio_value, index) => {
          count++;
          return <div className="row" key={"row_" + radio_value}>
                  <input key={radio_value} type={this.props.type} name={this.props.name} value={radio_value} id={this.props.radioIDs[index]} /> 
                  <label key={"label_" + radio_value} htmlFor={this.props.radioIDs[index]}>{radio_value}</label>
                 </div>;
        });
      break;
      default:
        element = <input
                          type={this.props.type}
                          name={this.props.name}
                          value={this.props.value}
                          placeholder={this.props.placeholder}
                          className={this.props.className}
                        />;
    }

    return (
      <div>{label}{element}</div>
    );
  }
}

Input.defaultProps = {
  type: "text",
}

Input.propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  radioValues: React.PropTypes.array,
  radioIDs: React.PropTypes.array
}

export default Input;