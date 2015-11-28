import React from 'react'
import Table from './Table.js'

    
class Actions extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Callings to be filled' }
    ]

    return (
      <div>
        <h2>Actions Needed</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>

           <div className="container-fluid">
                <div className="row">
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Bishopric</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Elders Quorem</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <Table/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Ward Positions</h1>
                    <Table/>

                </div> 
                    
                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>YM</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>YW</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Primary</h1>
                    <Table/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>YSA</h1>
                    <Table/>

                </div>
                
                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>High Priests</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Sunday School</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Ward Music</h1>
                    <Table/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <Table/>

                </div>    
                    
                
                                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>Communications</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Miscellaneous</h1>
                    <Table/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Stake Callings</h1>
                    <Table/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <Table/>

                </div>
                
            
                <div className="row">
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>Priests</h1>
                    <Table/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Teachers</h1>
                    <Table/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Deacons</h1>
                    <Table/>
                </div>
        

                <div className="row">
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>Laurels</h1>
                    <Table/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Mia-Maides</h1>
                    <Table/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Beehives</h1>
                    <Table/>
                </div>
        
                <div className="row">
                </div>
                  <div className="col-md-12">
                    <h1>Without Calling</h1>
                    <Table/>
                </div>
                
            </div>
    

    
       </div>
    )
  }
}

module.exports = Actions;
