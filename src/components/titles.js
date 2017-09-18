import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import $ from 'jquery';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

class Titles extends Component {

  render(){
    $(document).ready(function () {
      $('select').material_select();
    });
    
    let title_options = this.props.titles.map( title => {
      this.props.addTitles(title);
      return <option key={title} value={title}>{title}</option>;
    });

    return (
        <select className="col s12">
          {title_options}
        </select>
    );
  }
}

Titles.defaultProps = {
  titles: ['Mr', 'Mrs', 'Ms', 'Miss'],
  addTitles: function(e){ return e; }
}

Titles.propTypes = {
  titles: React.PropTypes.array,
  addTitles: React.PropTypes.func
}

export default Titles;
