import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import Route from 'react-router'
import IndexRoute from 'react-router'
import Router from 'react-router'
//import App from './App.js'
import Current from './components/Current.js'
import Actions from './components/Actions.js'
import Dashboard from './components/Dashboard.js'
import MyActions from './components/MyActions.js'
import Without from './components/Without.js'
import GlobalNav from './components/GlobalNav.js'
import Profile from './components/Profile.js'
import Members from './components/Members.js'
import Home from './components/Home.js'
import login from './components/login.js'
import register from './components/register.js'
import editTables from './components/editTables.js'
import editCallings from './components/editCallings.js'


const createBrowserHistory = require('history/lib/createBrowserHistory');


//ReactDOM.render(
//    <Router history={createBrowserHistory()}>
ReactDOM.render(
    <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='Current' component={Current} />
      <Route path='Dashboard' component={Dashboard} />
      <Route path='Actions' component={Actions} />
      <Route path='MyActions' component={MyActions} />
      <Route path='Without' component={Without} />
      <Route path='GlobalNav' component={GlobalNav} />
      <Route path='Profile' component={Profile} />
      <Route path='Members' component={Members} />
      <Route path='Home' component={Home} />
      <Route path='login' component={login} />
      <Route path='register' component={register} />
      <Route path='editTables' component={editTables} />
      <Route path='editCallings' component={editCallings} />


    </Route>
    </Router>
                , document.getElementById('root'));


//import React from 'react'
//import ReactDOM from 'react-dom';
//import render from 'react-dom'
//import Route from 'react-router'
//import IndexRoute from 'react-router'
//import Router from 'react-router'
//import App from './App.js'
//import Current from './components/Current.js'
//import Actions from './components/Actions.js'
//import Dashboard from './components/Dashboard.js'
//import MyActions from './components/MyActions.js'
//import Without from './components/Without.js'
//import GlobalNav from './components/GlobalNav.js'
//import Profile from './components/Profile.js'
//
//    
//
//var routes = (
//  <Router>
//    <Route path='/' component={App}>
//      <IndexRoute component={App} />
//      <Route path='Current' component={Current} />
//      <Route path='Dashboard' component={Dashboard} />
//      <Route path='Actions' component={Actions} />
//      <Route path='MyActions' component={MyActions} />
//      <Route path='Without' component={Without} />
//      <Route path='GlobalNav' component={GlobalNav} />
//      <Route path='Profile' component={Profile} />
//    </Route>
//  </Router>
//);
//
//
//ReactDom.render(routes, document.getElementById('root')
//)