import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'
import EditableTable from './EditRowsTableList.js'
import { ProgressBar, Popover, Tooltip, Button, Modal } from 'react-bootstrap';

//import ReactbBootstrap from 'react-bootstrap'

import api from './api.js';
import auth from "./auth.js";

const styles = {};
    

styles.wrapper = {
//  background: '#fffff',
  color: '#28363D',

}

styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
//  'border-bottom': '5px solid #2C4537',

}
//const Example = React.createClass({
//
//  getInitialState() {
//    return { showModal: false };
//  },
//
//  close() {
//    this.setState({ showModal: false });
//  },
//
//  open() {
//    this.setState({ showModal: true });
//  },
//
//  render() {
//    var popover = <Popover title="popover">very popover. such engagement</Popover>;
//    var tooltip = <Tooltip>wow.</Tooltip>;
//
//    return (
//      <div>
//        <p>Click to get the full Modal experience!</p>
//
//        <Button
//          bsStyle="primary"
//          bsSize="large"
//          onClick={this.open}
//        >
//          Launch demo modal
//        </Button>
//
//        <Modal show={this.state.showModal} onHide={this.close}>
//          <Modal.Header closeButton>
//            <Modal.Title>Modal heading</Modal.Title>
//          </Modal.Header>
//          <Modal.Body>
//            <h4>Text in a modal</h4>
//
//          </Modal.Body>
//          <Modal.Footer>
//            <Button onClick={this.close}>Close</Button>
//          </Modal.Footer>
//        </Modal>
//      </div>
//    );
//  }
//});



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
//      .log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items
      this.setState({
        tables: data
      });
//        console.log(this.state.tables);
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
        <p>Add Organizations before adding callings on this page.</p>
        <br></br>
        <div className='row' style={styles.border}></div>
        <EditableTable {...this.state.tables} />
        <div className='row' style={styles.border}></div>

    
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


