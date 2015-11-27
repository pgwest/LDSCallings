import React from 'react'
import CurrentTable from './CurrentTable.js'
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

         <div className="container-fluid">
                <div className="row">
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Bishopric</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Elders Quorem</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Relief Society</h1>
                    <CurrentTable/>

                </div>
                    
                <div className="row">
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>YM</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>YW</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Primary</h1>
                    <CurrentTable/>

                </div>
            </div>
        
        
        
        <div className='col-md-4'>
        	<h2>Table</h2> 

    
            
        </div>
       </div>

        
    )
  }
};



module.exports =Current;

