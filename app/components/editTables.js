import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'


import api from './api.js';
import auth from "./auth.js";

// Register page, shows the registration form and redirects to the list if login is successful
var editTables = React.createClass({
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
  addTable: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var organization = this.refs.organization.value;

    if (!organization) {
      return;
    }
    // register via the API
//    auth.register(name, username, password, function(loggedIn) {
//      // register callback
//      if (!loggedIn)
//        return this.setState({
//          error: true
//        });
//        console.log("registered");
//      this.history.pushState(null, '/login');
//    }.bind(this));
//  },
      api.addTable(organization, this.tableSet);
  },

      
  // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
    if (status) {
      // set the state for the list of items
        console.log("table added");
      this.setState({

      });
    } else {
      // if the API call fails, redirect to the login page
//      this.context.router.transitionTo('/login');
        console.log("failed to add table");
    }
  },
      
  // show the registration form
  render: function() {
    return (
      <div>
        <h2>Register</h2>
        <form className="form-vertical" onSubmit={this.addTable}>
          <input type="text" placeholder="Organization" ref="organization" autoFocus={true} />
          <input className="btn" type="submit" value="Add Organization" />
          {this.state.error ? (
             <div className="alert">Please fill both fields.</div>
           ) : null }
        </form>

      </div>
    );
  }
});

module.exports = editTables;



//
//    <div className="alert alert-success alert-dismissible" role="alert">
//  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//  <strong>Warning!</strong> Success! You imported a table!
//</div>


