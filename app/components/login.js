import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'


import auth from "./auth.js";

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (!username || !password) {
      return;
    }
    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
      console.log("logged in");
      this.history.pushState(null, '/Dashboard');
    }.bind(this));
  },

  // show the login form
  render: function() {
    return (
      <div>
        <h2>Login</h2>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" placeholder="Username" ref="username" autoFocus={true} />
          <input type="password" placeholder="Password" ref="password"/>
          <input className="btn btn-warning" type="submit" value="Login" />
          {this.state.error ? (
             <div className="alert">Invalid username or password.</div>
           ) : null}
        </form>
    
        <h2>Click here to register if you don't have an account.</h2>
        <Link to="/register"><h3>Register</h3></Link>{' '}

      </div>
    );
  }
});

module.exports = Login;