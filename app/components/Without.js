import React from 'react'
import MemberTable from './MemberTable.js'


class Without extends React.Component {

  render() {
    return (
     <div>
      <div>
        <h2>Members Without a Calling</h2>
      </div>
        <div className="col-md-2">
        </div>
      <div className="col-md-8">
            <h1>Without Calling</h1>
            <MemberTable/>
      </div>
     </div>
    )
  }

}

module.exports = Without;