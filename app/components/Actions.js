import React from 'react'
import Table from './Table.js'

    
class Actions extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Callings to be filled' }
    ]

    return (
      <div>
        <h2>Callings with Action Needed</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
        <div className='col-md-4'>
        	<h2>Table</h2> 

        <Table/>
            <br/>
        <Table/>
            <br/>
        <Table/>
            <br/>
        <Table/>
    
            
        </div>
      </div>
    )
  }
}

module.exports = Actions;
