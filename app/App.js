import React from 'react';
import styles from './App.css';
import Current from './components/Current.js';
import GlobalNav from './components/GlobalNav.js';
import Dashboard from './components/Dashboard.js';


import ReactRouter from "react-router";
var History = ReactRouter.History;

import auth from "./components/auth.js";

// Top-level component for the app
var App = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // the user is logged in
      loggedIn: auth.loggedIn()
    };
  },

  // callback when user is logged in
  setStateOnAuth: function(loggedIn) {
    this.setState({loggedIn:loggedIn});
  },

  // when the component loads, setup the callback
  componentWillMount: function() {
    auth.onChange = this.setStateOnAuth;
  },

  // logout the user and redirect to home page
  logout: function(event) {
    auth.logout();
    this.history.pushState(null, '/');
  },
    
    

  // show the navigation bar
  // the route handler replaces the RouteHandler element with the current page
  render: function() {
    return (
      <div>
            <GlobalNav/>
        {this.props.children || <Dashboard/>}
      </div>
        
    );
  }
});

module.exports = App;

//export default class App extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {test: 'foo'};
//  }
//  render() {
//    return (
//      <div >
//            <GlobalNav/>
//        {this.props.children || <Dashboard/>}
//      </div>
//        
//    );
//  }
//}
