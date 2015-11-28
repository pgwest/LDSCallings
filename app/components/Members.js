import React from 'react'
import MemberTable from './MemberTable.js'

const styles = {}

styles.thumbnail = {
  padding: '10px 20px',
  overflow: 'hidden',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center'
}
    
class Members extends React.Component {

    
  render() {
    return (
     <div>
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
        <h4>Johnathon Jacobs</h4>
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
        <h4>Johnathon Einstein</h4>
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

}

module.exports = Members;