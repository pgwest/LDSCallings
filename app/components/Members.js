import React from 'react'
import MemberTable from './MemberTable.js'
import api from './api.js'

const styles = {}

styles.thumbnail = {
  padding: '10px 20px',
  overflow: 'hidden',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center'
}

styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}
    
var Members = React.createClass ({
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
        <h1>Members Directory</h1>
      </div>
      <div className="col-md-6">
            <MemberTable/>
      </div>
      <div className="col-md-6">
            <MemberTable/>
      </div>
        
     <div className="row">
      <div className="col-md-4">
        <h1>Name of Person</h1>
        </div>
      <div className="col-md-4">
        <h1>Birthday</h1>
        </div>
      <div className="col-md-4">
        <h1>Image</h1>
        </div>
     </div>
        
     <div className="row">
      <div className="col-md-3">
        <h4>James Kirkland</h4>
        </div>
      <div className="col-md-3">
        <h4>September 21, 1996</h4>
        </div>
      <div className="col-md-6">
<img src='http://www.startrek.com/legacy_media/images/200307/kirk01/320x240.jpg' style={styles.thumbnail}/>
        </div>
     </div>    
        
        
      <div className="row">
      <div className="col-md-3">
        <h4>Albrecht MEinstein</h4>
        </div>
      <div className="col-md-3">
        <h4>September 21, 1946</h4>
        </div>
      <div className="col-md-6">
<img src='http://cdn.wordables.com/wp-content/uploads/2015/05/einstein.jpg' style={styles.thumbnail}/>
        </div>
     </div>  
        
        
     </div>
    )
  }

});

module.exports = Members;