import React from 'react'
import MemberTable from './MemberTable.js'


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
     </div>
    )
  }

}

module.exports = Members;