import React from 'react'
import Table from './Table.js'
//var Router = require('react-router');
//var Link = Router.Link;

class Current extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Add tables with Callings' }
    ]

    return (
      <div>
        <h2>Callings</h2>
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
};



module.exports =Current;

