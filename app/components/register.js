import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;

import auth from "./auth.js";

// Register page, shows the registration form and redirects to the list if login is successful
var Register = React.createClass({
      contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error registering
      error: false
    };
  },

  // handle regiser button submit
  register: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
//    var name = this.refs.name.value;
      var name = 'uselsess info';
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    var ward = this.refs.ward.value;    
    var calling = this.refs.calling.value;
    var email = this.refs.email.value;
      console.log(email);
      
    if (!name || !username || !password || !calling || !email || !ward) {
        console.log('value missing');
      return;
    }
      
    var wardId = Math.floor(Math.random()*500 +1) * Math.floor(Math.random()*10000) * Math.floor(Math.random()*100) + Math.floor(Math.random()*500 +1) + Math.floor(Math.random()*10000) + Math.floor(Math.random()*100) + Math.floor(Math.random()*500 +1) + Math.floor(Math.random()*10000) * Math.floor(Math.random()*100);
    // register via the API
    auth.register(name, username, password, ward, wardId, calling, email,  function(loggedIn) {
      // register callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
        console.log("registered");
//      this.history.pushState(null, '/login');
      this.context.history.pushState(null, '/');

    }.bind(this));
  },

  // show the registration form
  render: function() {
    return (
      <div>
        <h2>Register</h2>
        <form className="form-vertical" onSubmit={this.register}>

          <input type="text" placeholder="Username" ref="username"/>
          <input type="password" placeholder="Password" ref="password"/>
          <input type="ward" placeholder="Ward Name" ref="ward"/>
         <input type="text" placeholder="Calling" ref="calling"/>
         <input type="email" placeholder="Email" ref="email"/>
          <input className="btn btn-warning" type="submit" value="Register" />
          {this.state.error ? (
             <div className="alert">Invalid username or password.</div>
           ) : null }
        </form>
      </div>
    );
  }
});

//          <input type="text" placeholder="Name" ref="name" autoFocus={true} />

module.exports = Register;