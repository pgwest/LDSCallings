import React from 'react'
import { Link } from 'react-router'
import api from './api.js'
import auth from './auth.js'


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
    
//class Profile extends React.Component {
var Profile = React.createClass({

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
    alert('functionality not yet added')
  },
  
  getInitialState: function() {
      return{
      name: auth.getName(),
      calling: auth.getCalling(),
      email: auth.getEmail(),
      ward: auth.getWard(),
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
      <div>
        <h1 style={styles.headings}> My Account</h1>
        <div className="col-md-1">
        </div>
        <div className="col-md-3">
            <h3>Username: {this.state.name}</h3>         <button onClick={this.logOut}>Edit</button>
            <h3>Password: ******</h3>         <button onClick={this.logOut}>Edit</button>
        </div>
        <div className="col-md-3">
            <h3>Ward: {this.state.calling}</h3>         <button onClick={this.logOut}>Edit</button>

            <h3>Calling: {this.state.calling}</h3>         <button onClick={this.logOut}>Edit</button>

        </div>
        <div className="col-md-4">
            <h3>Email: {this.state.email}</h3>         <button onClick={this.logOut}>Edit</button>
        
        
        <h3>Edit Notifications</h3>
        <button onClick={this.logOut}>Edit Notifications</button>
        </div>
        
        
       <div className="row">
        </div>
       <div className="col-md-7">
        <h1 style={styles.headings}> Manage LDS Callings App</h1>
        </div>
        <div className='row'>
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-7">
        <h3>Edit Organizations</h3> 
        
        <Link to="/editTables"><h4>Edit Organizations</h4></Link>{' '}
        
        <h3>Edit Callings</h3> 

        <Link to="/editCallings"><h4>Edit Callings</h4></Link>{' '}
                
        <h3>Edit Administrators</h3> 
        <button onClick={this.logOut}>Edit Admins</button>
        
        <h3>Import Ward Members</h3>
        <button onClick={this.logOut}>Import Ward Membors</button>
        
        <h3>Export CSV</h3> 
        <button onClick={this.logOut}>Export CSV</button>



        </div>
      </div>
    )
  }
});

module.exports = Profile;