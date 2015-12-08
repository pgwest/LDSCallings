import React from 'react'
import { Link } from 'react-router'

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

styles.align = {
//  background: '#5B6F79',
 textAlign: 'center',

}

styles.paddingLeft = {
//  background: '#5B6F79',
  marginLeft: '15px',

}

styles.frame = {
//  background: '#5B6F79',
    width: '100%',
    height: '50em',
}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
//  'border-bottom': '5px solid #2C4537',

}
    
var Dashboard = React.createClass({
      // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object
  },

  // initial state
  getInitialState: function() {
    return {
      // list of items in the todo list
    };
  },

  // when the component loads, get the list items
  componentDidMount: function() {
//    api.getTables(this.listSet);
  },

  // reload the list of items
  reload: function() {
//    api.getItems(this.listSet);
  },

//  // callback for getting the list of items, sets the list state
//  listSet: function(status, data) {
//    if (status) {
//      // set the state for the list of items
//      this.setState({
////        items: data.items
//      });
//    } else {
//      // if the API call fails, redirect to the login page
//      this.context.router.transitionTo('/login');
//    }
//  },
    
  render: function() {

    return (
      <div>
        <h2>Welcome to LDS Callings Manager</h2>
        <p>
            To use this app begin by adding Callings and modifying your ward structure.<br/>
        Once ready, simply fill in the current names and you are ready to start using the LDS Callings Manager to manage your ward with a lot less headache. Enjoy!

        <br/> <br/>   In addition, home teaching and visiting teaching can be reported throught the links below. <em>(this functionality has not yet been added)</em>
    <br/> <br/> 
        </p>
        <div className="col-md-1">
        </div>
        <div className="col-md-10">
            <p style={styles.align}><strong>Feel free to use lds.org below to help with your ward management without leaving the page!</strong></p>
            <iframe src="http://www.lds.org" style={styles.frame}>
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
      </div>
    )
  }
});

module.exports = Dashboard;



//        <h2>Report Your Visits</h2>{' '}
