import React from "react";
import ReactRouter from "react-router";
//var History = ReactRouter.History;
import { Link } from 'react-router'
import History from 'react-router';


import auth from "./auth.js";

import { ProgressBar, Popover, Tooltip, Button, Modal } from 'react-bootstrap';
import api from './api.js'

    
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
    
    
const styles = {};
    
var tables = {};

styles.wrapper = {
//  background: '#fffff',
  color: '#28363D',

}
 
styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}

styles.padding = {
 padding: '10px',   
}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
//  'border-bottom': '5px solid #2C4537',

}


const Example = React.createClass({

  getInitialState() {
    return { showModal: false };
  },
    
    addAlert: function (email) {
    this.refs.container.info("Email to reset password sent on " + new Date(), "Sent to " + {email}, {
      closeButton: true
    });
  },

  clearAlert: function() {
    this.refs.container.clear();
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

    login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var email = this.refs.email.value;
    if (!email) {
      return;
    }
//    console.log('email is ');
//    console.log(email);
        this.addAlert(email);
    api.reset(email, this.close);
    },
    
  render() {
    var popover = <Popover title="popover">very popover. such engagement</Popover>;
    var tooltip = <Tooltip>wow.</Tooltip>;

    
    
    return (
      <div>
        <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />
        <Button
          bsStyle="default"
          bsSize="small"
          onClick={this.open}
        >
         Reset Password
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Forgot UserName or Password?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Enter the email you used to register and we'll send instructions on how to reset your password.</p>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" placeholder="Enter Your Email" ref="email" autoFocus={true} />
          <input className="btn btn-warning" type="submit" value="Submit" />
          {this.state.error ? (
             <div className="alert">Invalid.</div>
           ) : null}
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
  // mixin for navigation
//  mixins: [ History ],
    
          // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false,
      error1: false,
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
       return this.setState({
          error1: true,
        });    }
    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
      console.log("logged in");
//      this.context.history.pushState(null, '/Dashboard');
      this.context.history.pushState(null, '/');

    }.bind(this));
  },

  // show the login form
  render: function() {
    return (
      <div>
                <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />
        <div className = "col-sm-4">
        <h2>Login</h2>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" placeholder="Username" ref="username" autoFocus={true} />
          <input type="password" placeholder="Password" ref="password"/>
          <input className="btn btn-warning" type="submit" value="Login" />
          {this.state.error ? (
             <div className="alert">Invalid username or password.</div>
           ) : null}
    {this.state.error1 ? (
             <div className="alert">Please enter username and password before logging in.</div>
           ) : null}
        </form>
            <p>Forgot your username or password?</p>
            <Example />

    </div>


        <div className = "col-sm-4">
        </div>
        <div className = "col-sm-12">
        <h2>Click here to register if you don't have an account.</h2>
        <Link to="/register"><h3>Register</h3></Link>{' '}
        </div>
      </div>
    );
  }
});

//    <div className = "col-sm-4">
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <p>Forgot your username or password?</p>
//    </div>

module.exports = Login;