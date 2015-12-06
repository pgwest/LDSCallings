import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'
//import CurrentTableNames from './currentTableNames';

import api from './api.js';
import auth from "./auth.js";
import List from 'react-list-select';
import FilteredMultiSelect from 'react-filtered-multiselect'
import Example from './organizationList.js'
    
var tableMap = {};
//var currentTable = {};


const styles = {};
    


styles.wrapper = {
//  background: '#fffff',
  width: '100%',

}

styles.padding = {
//  background: '#fffff',
  padding: '10px'

}

styles.margin = {
//  background: '#fffff',
  margin: '10px'

}

var CULTURE_SHIPS = [
  {id: 1, name: '5*Gelish-Oplule'},
  {id: 2, name: '7*Uagren'},
// ...
  {id: 249, name: 'Zero Gravitas'},
  {id: 250, name: 'Zoologist'}
]

var Test = React.createClass({
     contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },

  // initial state
  getInitialState: function() {
//          api.getTables(this.tableSet);
    return {
        data: {
            tables: []
        }
    }
  },
  reload: function() {
    api.getTables(this.tableSet);
  },

  // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
      console.log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items
     CULTURE_SHIPS = data;
      this.setState({
        tables: data
      });
//        console.log(this.state.tables);
    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
  render: function(){
//      console.log("jobs = " + jobs + jobs[1].calling);
//      console.log(this.props.jobs.tableData);
//      jobs = this.props.jobs.tableData;
//      api.getTables(this.tableSet);
      if(this.state.tables){
      CULTURE_SHIPS = [];
      var temp = [];
      console.log('this.state.table');
          
      console.log(this.state.tables);
    
      for (var i=0; i< this.state.tables.tables.length; i++){
          console.log('data[i]');
          console.log(this.state.tables.tables[i]);
           temp.push(
               {id: this.state.tables.tables[i]._id, name: this.state.tables.tables[i].name}
           );
      }
      }
      console.log(temp);
      CULTURE_SHIPS = temp;
      console.log('culture ships');
      console.log(CULTURE_SHIPS);
      if(!CULTURE_SHIPS){
        console.log('culture ships');

        CULTURE_SHIPS = [
  {id: 1, name: '5*Gelish-Oplule'},
  {id: 2, name: '7*Uagren'},
// ...
  {id: 249, name: 'Zero Gravitas'},
  {id: 250, name: 'Zoologist'}
]
      }
      console.log(CULTURE_SHIPS);
//      console.log('in test');
    return (
        
      <div>
        <p>
        </p>
      </div>
    );
  }
});







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
      title: "First Organization",
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

      api.addTable(organization, this.tableSet);
            this.forceUpdate();

  },

      // handle regiser button submit
  moveTable: function(event) {
    // prevent default browser submit
    event.preventDefault();
      console.log(moveTable);
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

      api.deleteTable(organization, this.tableSet);
  },    
    
  // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
    if (status) {
      // set the state for the list of items
        console.log("table added");
      this.setState({
        tables: data

      });
    } else {
      // if the API call fails, redirect to the login page
//      this.context.router.transitionTo('/login');
        console.log("failed to add table");
    }
  },
    
    // callback for getting the list of items, sets the list state

    
  // show the registration form
  render: function() {
//      console.log("in edit orgs");
//      console.log(this.state.tables);
    return (
      <div>
        <div className="col-md-1">
        </div>
        <h2>Edit Organizations</h2>
        <br></br>
        <div className="col-md-1">
        </div>
      <div className="col-md-10">
        <div className="panel panel-primary">
      <div className="panel-heading">Add</div>
      <div className="panel-body"> 
        <div className="col-md-1">
        </div>
        <div className="col-md-3">
        <h2>Add Organizations</h2>
        <form className="form-vertical" onSubmit={this.addTable}>
          <input type="text" placeholder="Organization" ref="organization" autoFocus={true}/>
          <br/>
          <br/>
          <input className="btn btn-warning" type="submit" value="Add Organization" />
          {this.state.error ? (
             <div className="alert">Please fill enter the organization name in the provided field.</div>
           ) : null }
        </form>
    <br></br>
    </div>
        </div>

    </div>
    </div>
    <div className="row">
        <div className="col-md-12">

    <br></br>
        </div>
    </div>
    
    <div className="col-md-1">
    </div>
    <div className="col-md-10">
        <div className="panel panel-primary">
      <div className="panel-heading">Remove</div>
      <div className="panel-body">
            <div className="col-md-1">
        </div>
            <div className="col-md-10">
                <h2>Remove Organizations</h2>
                <Example cultureShips ={CULTURE_SHIPS} />
            </div>
    </div>
    <div className="col-md-1">
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


