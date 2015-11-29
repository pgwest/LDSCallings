'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var jobs = [];
var jobTypes = ['A','B','C','D'];

function addJobs(quantity) {
  var startId = jobs.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    jobs.push({
      id: id,
      calling: "Calling " + id,
      candidate: 'James Finnigan',
      thinking: i%2==0?'Y':'N',
      decided:  i%3==0?'Y':'N',
      auxiliary: i%3==0?'Y':'N',
      called: i%4==0?'Y':'N',
      released: i%5==0?'Y':'N',
      sustain: i%6==0?'Y':'N',
      setApart: i%7==0?'Y':'N',
      mls: i%8==0?'Y':'N'
    });
  }
}

addJobs(5);

var cellEditProp = {
  mode: "dbclick",
  blurToSave: true
};

var selectRowProp = {
  mode: "checkbox", // or checkbox
  clickToSelect: true
};


//add if any checked, highlight one color, if empty in
//current page, highlight red, etc. 


export default class EditTypeTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} >
          <TableHeaderColumn dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn>
        
          <TableHeaderColumn dataField="calling" editable={{type:'textarea'}} width="120">Calling</TableHeaderColumn>
        
          <TableHeaderColumn dataField="candidate" editable={{type:'textarea'}} width="120">Candidate</TableHeaderColumn>
        
          <TableHeaderColumn dataField="thinking" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">{"  " + String.fromCharCode(63)}</TableHeaderColumn>
    
        <TableHeaderColumn dataField="decided" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">{String.fromCharCode(10004)}</TableHeaderColumn>
        
        <TableHeaderColumn dataField="auxiliary" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">Aux</TableHeaderColumn>
        
        <TableHeaderColumn dataField="called" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">{String.fromCharCode(9743)}</TableHeaderColumn>
        
        <TableHeaderColumn dataField="released" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">{String.fromCharCode(9988)}</TableHeaderColumn>
        
        <TableHeaderColumn dataField="sustain" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">{String.fromCharCode(9996)}</TableHeaderColumn>
        
        <TableHeaderColumn dataField="setApart" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">SA</TableHeaderColumn>
        
        <TableHeaderColumn dataField="mls" editable={{type:'checkbox', options:{values:'Y:N'}}} width="40">MLS</TableHeaderColumn>
        
        <TableHeaderColumn dataField="notes" editable={false} width="40">{String.fromCharCode(9998)}</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
