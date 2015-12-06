import React from "react";
import ReactRouter from "react-router";
var History = ReactRouter.History;
import { Link } from 'react-router'
//import CurrentTableNames from './currentTableNames';

import api from './api.js';
import auth from "./auth.js";
import List from 'react-list-select';
import FilteredMultiSelect from 'react-filtered-multiselect'


const styles = {};
    
var CULTURE_SHIPS = [];

var tablesToDelete = [];

styles.wrapper = {
//  background: '#fffff',
  width: '100%',

}

styles.padding = {
//  background: '#fffff',
  padding: '10px'

}

styles.margin = {
//  background: '#fffff',
  margin: '10px'

}




var Example = React.createClass({
         contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },
  getInitialState: function() {
        api.getTables(this.tableSet);
    return {selectedShips: [],
           }
  },
   getDefaultProps: function(){
        api.getTables(this.tableSet);
        return {};
   },
    
  componentWillMount: function(){
              api.getTables(this.tableSet);
        // Calling setState here does not cause a re-render
    },

  handleDeselect: function(index) {
    var selectedShips = this.state.selectedShips.slice()
    selectedShips.splice(index, 1)
    this.setState({selectedShips})
  },
    
  handleSelectionChange: function(selectedShips) {
    this.setState({selectedShips})
  },
    
  deleteTables: function() {
    console.log('delete tables');
      console.log(this.state);
//      console.log(this.state.selectedShips);
      if(this.state.selectedShips){
          var length = this.state.selectedShips.length;
          for(var i=0; i<length; i++){
      api.deleteTable(this.state.selectedShips[0],this.tableSet);
          }
      }
      this.state.selectedShips = [];
      this.context.history.pushState(null, '/login');
      this.context.history.pushState(null, '/editTables');
//      this.forceUpdate();
  },

      // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
//      console.log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items
//     CULTURE_SHIPS = data;
//        console.log('data');
//        console.log(data);
        
//      this.setState({
//        cultureShips: data
//      });
//        this.props.cultureShips = data.tables;
//        CULTURE_SHIPS = data.tables;
        var temp = [];
        if(data.tables){
        for (var i=0; i< data.tables.length; i++){
//          console.log('data[i]');
//          console.log(data.tables[i].title);
           temp.push(
               {id: data.tables[i]._id, name: data.tables[i].title}
           );
        }
      
//      console.log(temp);
      CULTURE_SHIPS = temp;
        }
        else{
                    this.forceUpdate();

        }
        if(CULTURE_SHIPS != []){
            this.forceUpdate();
        }
        
//     CULTURE_SHIPS = this.state.cultureShips.tables;   
//        console.log(this.state.tables);
    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
    
  render: function() {
//      if(this.props.cultureShips){
//          console.log('in filtered list render');
//       CULTURE_SHIPS = this.props.cultureShips;
//      }
//      else{
//        CULTURE_SHIPS = [
//  {id: 1, name: '5*Gelish-Oplule'},
//  {id: 2, name: '7*Uagren'},
//// ...
//  {id: 249, name: 'Zero Gravitas'},
//  {id: 250, name: 'Zoologist'}
//]
//      }
//      if(this.state.cultureShips){
//          console.log('state culture ships');
//       CULTURE_SHIPS = this.state.cultureShips;   
//      }
//      else{
//          api.getTables(this.tableSet)
//        console.log('state culture ships after get tables');
//      }
//    CULTURE_SHIPS = [];
//    CULTURE_SHIPS.push(list);
//      console.log(this.props);
//      CULTURE_SHIPS = this.props[0];
//      console.log('culture ships');
//      console.log(CULTURE_SHIPS);
//      console.log('selected ships');
//      console.log(this.state);
      if(!CULTURE_SHIPS){
        CULTURE_SHIPS = [
  {id: 1, name: '5*Gelish-Oplule'},
  {id: 2, name: '7*Uagren'},
// ...
  {id: 249, name: 'Zero Gravitas'},
  {id: 250, name: 'Zoologist'}
]
      }
      
    var {selectedShips} = this.state
    return <div>

        <div className="col-md-5"  style={styles.padding}>
        <div className="panel panel-info">
            <div className="panel-heading">Organizations</div>
                <div className="panel-body">
                    <div className="col-md-1">
                        </div>
      <FilteredMultiSelect
        onChange={this.handleSelectionChange}
        options={CULTURE_SHIPS}
        selectedOptions={selectedShips}
        textProp="name"
        valueProp="id"
        style={styles.padding}
      />

              </div>
            </div>
        </div>
          
     <div className="col-md-5"  style={styles.padding}>
        <div className="panel panel-danger">
            <div className="panel-heading">Organizations to Delete</div>
                <div className="panel-body">

      {selectedShips.length === 0 && <p>(nothing selected yet)</p>}
      {selectedShips.length > 0 && <ul>
        {selectedShips.map((ship, i) => <li key={ship.id}>
          {ship.name}
          <button className="btn btn-warning" type="button" onClick={this.handleDeselect.bind(null, i)}>
            &times;
          </button>
        </li>)}
      </ul>}
            <button className="btn btn-warning" type="button" onClick={this.deleteTables}>DELETE</button>
              </div>
            </div>
        </div>
      </div>
  }
})

module.exports = Example;