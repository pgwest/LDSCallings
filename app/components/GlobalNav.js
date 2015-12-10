import React from 'react'
import { Link } from 'react-router'
import auth from './auth.js'
import App from '../App.js'

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

    
    
    
const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

styles.button = {
  background: dark,
  color: light,
  fontWeight: 200

}

var GlobalNav = React.createClass ({

//  static defaultProps = {
//    user: {
//      id: 1,
//      name: 'User\'s Name'
//    }
//  },

//  constructor: function(props, context) {
////    super(props, context)
//    this.logOut = this.logOut.bind(this)
//  },
    
    addAlert: function () {
    this.refs.container.error("hi! Now" + new Date(), "///title\\\\\\", {
      closeButton: true
    });
  },

  clearAlert: function() {
    this.refs.container.clear();
  },


  logOut: function() {
//    alert('log out');
      console.log('this.logout');
//      this.addAlert();
//    auth.logout();
    
  },
      
  open: function() {
    
  },

  render: function() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
                <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Home</Link>{' '}
          <Link to="/current" style={styles.link} activeStyle={styles.activeLink}>Current Callings</Link>{' '}
          <Link to="/actions" style={styles.link} activeStyle={styles.activeLink}>Action Needed</Link>{' '}
          <Link to="/without" style={styles.link} activeStyle={styles.activeLink}>Without A Calling</Link>{' '}
                  <Link to="/members" style={styles.link} activeStyle={styles.activeLink}>Member Directory</Link>{' '}
          <Link to="/myActions" style={styles.link} activeStyle={styles.activeLink}>My Actions <span className="badge">3</span></Link>{' '}
        



        
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">My Account <span className="glyphicon glyphicon-cog" aria-hidden="true"></span></Link> 
        
        <button style={styles.button} onClick={auth.logout}>Log Out</button>

        </div>
      </div>
    )
  }
});

module.exports = GlobalNav;


//
//          <Link to="/register" style={styles.link} activeStyle={styles.activeLink}>Register</Link>{' '}
//
//          <Link to="/login" style={styles.link} activeStyle={styles.activeLink}>Login</Link>{' '}