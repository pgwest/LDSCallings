import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'
//import CurrentTableNames from './currentTableNames';

import api from './api.js';
import auth from "./auth.js";

var tableMap = {};
//var currentTable = {};
var toBeRemoved = {
    tables : []
};

const styles = {};
    

styles.wrapper = {
//  background: '#fffff',
  width: '100%',

}

  var CurrentTableNames = React.createClass({
    onChange: function(e){
        console.log('selected');
    },
    render: function() {
        console.log(this.props);
      var list = this.props.tables.map(function(tableDataProps){
//          console.log(tableDataProps);
          tableMap[tableDataProps.title] = tableDataProps.id;
        return     <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" aria-label="..."/>
      </span>
        <p className="list-group-item" style={styles.wrapper}>{tableDataProps.title}</p>
    </div>
      });
//        console.log(list);
      return <div className="list-group">
        {list}
      </div>
    }
  });


  var CurrentTableNamesToRemove = React.createClass({
    render: function() {
        console.log(this.props);
        console.log(toBeRemoved);
      var list = this.props.tables.map(function(tableDataProps){
//          console.log(tableDataProps);
          tableMap[tableDataProps.title] = tableDataProps.id;
        return <button type="button" className="list-group-item" style={styles.wrapper}>{tableDataProps.title}</button>
      });
//        console.log(list);
      return <div className="list-group">
        {list}
      </div>
    }
  });
// Register page, shows the registration form and redirects to the list if login is successful
var editTables = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
      tableMap = {};
    return {
      // there was an error registering
      error: false,
      tables: {
            tables:[{
      id: "id",
      title: "First Org.",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            key: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ],
      }, {
                key: "id1",
                title: "Second Org.",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      }
        ]}
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

      // handle regiser button submit
  moveTable: function(event) {
    // prevent default browser submit
    event.preventDefault();

  },
      
  // handle regiser button submit
  removeTable: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var organization = this.refs.organizationToRemove.value;

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
      api.deleteTable(organization, this.tableSet);
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
//      console.log("in edit orgs");
//      console.log(this.state.tables);
    return (
      <div>
        <h2>Edit Organizations</h2>
        <br></br>
        <div className="col-md-3">
        <h3>Add Organizations</h3>
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
        <h3>Remove Organization</h3>

    <br></br>
        </div>
    </div>
    
    <div className="col-md-4">
        <div className="panel panel-primary">
      <div className="panel-heading">Organizations</div>
      <div className="panel-body">
        <CurrentTableNames {...this.state.tables}/>
        <button type="submit" className="btn btn-warning">Move selected to Tables to Delete</button>
      </div>


    </div>
    </div>
     <div className="col-md-4">
        <div className="panel panel-danger">
      <div className="panel-heading">Organizations to Delete</div>
      <div className="panel-body">
        <CurrentTableNamesToRemove {...toBeRemoved}/>
      </div>
        

    </div>
    </div>
    
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


