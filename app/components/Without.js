import React from 'react'
import MemberTable from './MemberTable.js'
import api from './api.js'
    
    const styles = {};
styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}

var Without = React.createClass ({
    contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },
    getInitialState: function() {
        return {
        }
    },
      componentDidMount: function() {
    api.getTables(this.tableSet);
  },
    tableSet: function(status, data) {
//      console.log(status);
//      console.log(data);
    if (status) {

//        console.log(this.state.tables);
    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
  render: function() {
    return (
     <div style={styles.border}>
      <div>
        <h2>Members Without a Calling</h2>
      </div>
        <div className='row' style= {styles.border}>
        <div className="col-md-2">
        </div>
      <div className="col-md-8">
            <h1>Without Calling</h1>
            <MemberTable/>
      </div>
     </div>
        </div>
    )
  }

});

module.exports = Without;