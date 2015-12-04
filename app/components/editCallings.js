import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'


import api from './api.js';
import auth from "./auth.js";

// Register page, shows the registration form and redirects to the list if login is successful
var editCallings = React.createClass({
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
        <h2>Edit Callings</h2>
        <br></br>
        <div className="col-md-3">
        <h3>Add Callings</h3>
        <form className="form-vertical" onSubmit={this.addTable}>
          <input type="text" placeholder="Organization" ref="organization" autoFocus={true} />
          <input className="btn btn-warning" type="submit" value="Add Organization" />
          {this.state.error ? (
             <div className="alert">Please fill enter the organization name in the provided field.</div>
           ) : null }
        </form>
    <br></br>
    </div>
    <div className="row">
        <div className="col-md-12">
        <h3>Remove Callings</h3>

    <br></br>
        </div>
    </div>
    
    <div className="col-md-4">
        <div className="panel panel-primary">
      <div className="panel-heading">Organizations</div>
      <div className="panel-body">
        <p>...</p>
      </div>

      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    </div>
     <div className="col-md-4">
        <div className="panel panel-danger">
      <div className="panel-heading">Organizations to Delete</div>
      <div className="panel-body">
        <p>...</p>
      </div>

      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    </div>
    
      </div>
    );
  }
});

module.exports = editCallings;



//
//    <div className="alert alert-success alert-dismissible" role="alert">
//  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//  <strong>Warning!</strong> Success! You imported a table!
//</div>


