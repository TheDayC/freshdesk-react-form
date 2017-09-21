import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './scss/App.css';
import $ from 'jquery';
//import { Button, Row, Col, Input } from 'react-materialize';
import Titles from './components/titles';
import Input from './components/input';


class App extends Component {
  constructor(){
    super();
    this.state = {
      titles:[]
    }
  }
  componentWillMount(){
    //this.handleTitles();
  }

  componentDidMount(){
    //this.handleTitles();
  }

  handleTitles(title){
    let title_array = this.state.titles;
    title_array.push(title);
  }

  handleSubmit(e){
    e.preventDefault();
    
    var data = {
      "email": "david.connolly@kaplan.co.uk",
      "subject": "Test API connected enquiry",
      "description": "Description about the problem",
      "priority": 1,
      "status": 2,
      "cc_emails": ["david.connolly@kaplan.co.uk"],
      /*"custom_fields":{
                        "first_name":this.refs.firstname.value,
                        "last_name":this.refs.lastname.value,
                        "email":this.refs.email.value,
                        "phone":this.refs.phone.value
                      }*/
    };

    $.ajax({
      url: "https://dckaplan.freshdesk.com/api/v2/tickets",
      beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + btoa("ejTNMTBFNF0cCHKebLt:X"));
      },
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      crossDomain: true,
      data: JSON.stringify(data),
      success : function(result) {
        console.log(result);
      },
      error : function(xhr, err, err2){
        console.log(xhr.responseText);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="App">

          <div className="App-intro">
          <form id="freshdesk" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row student"><Input type="radio" name="student" radioValues={['Yes', 'No']} radioIDs={['student1', 'student2']}  /></div>
            <div className="row title"><Titles addTitles={this.handleTitles.bind(this)} /></div>
            <div className="row first-name"><Input type="text" name="first_name" placeholder="First Name" className="col s12" /></div>
            <div className="row last-name"><Input type="text" name="last_name" placeholder="Last Name" className="col s12" /></div>
            <div className="row email"><Input type="email" name="email" placeholder="Email" className="col s12" /></div>
            <div className="row phone"><Input type="text" name="phone" placeholder="Phone" className="col s12" /></div>
            <div className="row submit">
              <div className="col s12">
                <button type="submit" className="btn">Submit</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
