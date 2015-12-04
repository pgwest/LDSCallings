import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'
import EditableTable from './EditRowsTableList.js'

import api from './api.js';
import auth from "./auth.js";

// Register page, shows the registration form and redirects to the list if login is successful
var editCallings = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  //class Current extends React.Component {
      // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },

  // initial state
  getInitialState: function() {
    return {
      // list of items in the todo list
        tables: {
            tables:[{
      id: "id",
      title: "Bishopric",
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
                title: "EQ",
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
      },
      {      key: "id2",
             title: "RS",
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
      },
        {      key: "id3",
               title: "YM",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     },{       id: "id3",
          calling: "Calling 03",
          name: 'Jonathon Tres3',
          date: '9/8/2004'   
     }
     ]
      },
     {      key: "id4",
               title: "YW",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      }   
     ],
        },
    };
  },

//  // when the component loads, get the list items
//  componentWillMount: function() {
//    api.getTables(this.tableSet);
//  },
  // when the component loads, get the list items
  componentDidMount: function() {
    api.getTables(this.tableSet);
  },

  // reload the list of items
  reload: function() {
    api.getTables(this.tableSet);
  },

  // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
      console.log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items
      this.setState({
        tables: data
      });
        console.log(this.state.tables);
    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
      
  // show the registration form
  render: function() {
    return (
      <div>
        <h1>Edit Callings</h1>
        <br></br>
        <EditableTable {...this.state.tables} />

    
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


