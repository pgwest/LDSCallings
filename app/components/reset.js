import React from "react";
import ReactRouter from "react-router";
//var History = ReactRouter.History;
import { Link } from 'react-router'
import History from 'react-router';
import cookie from 'react-cookie';


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

var Reset = React.createClass({
  // mixin for navigation
//  mixins: [ History ],
    
          // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },

        addAlert: function () {
    this.refs.container.error("Password reset on " + new Date(), "Confirmation email will be sent.", {
      closeButton: true
    });
  },

  clearAlert: function() {
    this.refs.container.clear();
  },
  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },
  open: function(){

  },

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var newpass = this.refs.newPass.value;
    var password = this.refs.confirmPass.value;
    if (!newpass || !password || (newpass !== password)) {
      return;
    }
    // 
//      console.log("reset");
//      console.log(cookie.load('reset'));
      var token = cookie.load('reset');
      api.resetPass(newpass, token, this.addAlert);
//      this.context.history.pushState(null, '/Dashboard');
      this.context.history.pushState(null, '/');

  },
    
  // show the login form
  render: function() {
    return (
      <div>
                <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />
        <div className = "col-sm-4">
        <h2>Reset</h2>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="password" placeholder="New Passord" ref="newPass" autoFocus={true} />
          <input type="password" placeholder="Confirm Password" ref="confirmPass"/>
          <input className="btn btn-warning" type="submit" value="Login" />
          {this.state.error ? (
             <div className="alert">The passwords do not match.</div>
           ) : null}
        </form>

    </div>


        <div className = "col-sm-4">
        </div>
        <div className = "col-sm-12">
        </div>
      </div>
    );
  }
});

module.exports = Reset;