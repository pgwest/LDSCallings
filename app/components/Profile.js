import React from 'react'
import { Link } from 'react-router'
import api from './api.js'
import auth from './auth.js'

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

    
    
    
const styles = {};
    

styles.wrapper = {
//  background: '#fffff',
  color: '#fffff',

}

styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}

styles.padding = {
//  background: '#5B6F79',
  margin: '20px',

}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
      margin: '10px',

//  'border-bottom': '5px solid #2C4537',

}
    
//class Profile extends React.Component {
var Profile = React.createClass({
    addAlert: function () {
    this.refs.container.error("hi! Now" + new Date(), "///title\\\\\\", {
      closeButton: true
    });
  },

  clearAlert: function() {
    this.refs.container.clear();
  },

//class Current extends React.Component {
      // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },
//  constructor(props, context) {
//    super(props, context)
//    this.logOut = this.logOut.bind(this)
//  }

  logOut: function() {
    alert('functionality not yet added');
  },
  
  getInitialState: function() {
      return{
      name: auth.getName(),
      calling: auth.getCalling(),
      email: auth.getEmail(),
      ward: auth.getWard(),
      username: auth.getUsername(),
      };
  },
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
//      console.log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items

    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
    
  render: function() {
      
//      console.log(this.state.name);
//      console.log(auth.getName());
//      console.log(this.state.calling);
//      console.log(auth.getCalling());
    return (
      <div style={styles.border}>
        <h1 style={styles.headings}> My Account</h1>
        <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />

              <div className="panel panel-primary" style={styles.padding}>
              <div className="panel-heading">User Settings and Info</div>
              <div className="panel-body">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <h3>Username: {this.state.username}</h3>         
                    <button onClick={this.logOut} className="btn btn-warning">Edit</button>
                        <h3>Password: ******</h3>         
                    <button onClick={this.logOut} className="btn btn-warning">Edit</button>
                    </div>
                    <div className="col-md-3">
                        <h3>Ward: {this.state.ward}</h3>         
                    <button onClick={this.logOut} className="btn btn-warning">Edit</button>

                        <h3>Calling: {this.state.calling}</h3>         
                    <button onClick={this.logOut} className="btn btn-warning">Edit</button>

                    </div>
                    <div className="col-md-4">
                        <h3>Email: {this.state.email}</h3>         
                    <button onClick={this.logOut} className="btn btn-warning">Edit</button>


                    <h3>Edit Notifications</h3>
                    <button onClick={this.logOut} className="btn btn-warning">Edit Notifications</button>
                    </div>
        
            </div>
            </div>
        
       <div className="row">
        </div>
       <div className="col-md-7">
        <h1 style={styles.headings}> Manage LDS Callings App</h1>
        </div>
        <div className='row'>
        </div>
              <div className="panel panel-primary" style={styles.padding}>
              <div className="panel-heading">Manage Ward Structure, Members, and Admins</div>
              <div className="panel-body">
        <div className="col-md-1">
        </div>
        <div className="col-md-7">
        
        <h3>Edit Organizations</h3> 
               <button className="btn btn-warning">
        <Link to="/editTables" style={styles.wrapper}>Edit Organizations</Link>{' '}</button>
        
        <h3>Edit Callings</h3> 
               <button className="btn btn-warning">
        <Link to="/editCallings">Edit Callings</Link>{' '}
                </button>
        
        <h3>Edit Administrators</h3> 
        <button onClick={this.logOut} className="btn btn-warning">Edit Admins</button>
        
        <h3>Import Ward Members</h3>
        <button onClick={this.logOut} className="btn btn-warning">Import Ward Membors</button>
        
        <h3>Export CSV</h3> 
        <button onClick={this.logOut} className="btn btn-warning">Export CSV</button>

        </div>
        </div>

        </div>
      </div>
    )
  }
});


//        <h1>
//          React-Toastr
//          <small>React.js toastr component</small>
//        </h1>
//
//
//
//        <div className="btn-container">
//          <button className="primary" onClick={this.addAlert}>Hello {this.props.name}</button>
//          <button className="primary" onClick={this.clearAlert}>CLEAR</button>
//        </div>   

module.exports = Profile;