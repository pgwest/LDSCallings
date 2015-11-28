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

         <div className="container-fluid">
                <div className="row">
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Bishopric</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Elders Quorem</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Ward Positions</h1>
                    <CurrentTable/>

                </div> 
                    
                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>YM</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>YW</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Primary</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>YSA</h1>
                    <CurrentTable/>

                </div>
                
                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>High Priests</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Sunday School</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Ward Music</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <CurrentTable/>

                </div>    
                    
                
                                <div className="row">
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>Communications</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Miscellaneous</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Stake Callings</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Relief Society</h1>
                    <CurrentTable/>

                </div>
                
            
                <div className="row">
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>Priests</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Teachers</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Deacons</h1>
                    <CurrentTable/>
                </div>
        

                <div className="row">
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>Laurels</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Mia-Maides</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Beehives</h1>
                    <CurrentTable/>
                </div>
                
            </div>
    

    
       </div>

        
    )
  }
};



module.exports =Current;

