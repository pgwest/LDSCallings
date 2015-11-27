import React from 'react'
import Table from './Table.js'


class Without extends React.Component {

  render() {
    return (
     <div>
      <div>
        <h2>Members Without a Calling</h2>
      </div>
      <div className="col-md-12">
            <h1>Without Calling</h1>
            <Table/>
      </div>
     </div>
    )
  }

}

module.exports = Without;