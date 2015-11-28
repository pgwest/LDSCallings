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

export default class EditTypeTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} >
          <TableHeaderColumn dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="calling" editable={{type:'textarea'}} width="120">Calling</TableHeaderColumn>
          <TableHeaderColumn dataField="candidate" editable={{type:'textarea'}} width="120">Candidate</TableHeaderColumn>
          <TableHeaderColumn dataField="thinking" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">?</TableHeaderColumn>
        <TableHeaderColumn dataField="decided" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">Decided</TableHeaderColumn>
        <TableHeaderColumn dataField="called" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">Called</TableHeaderColumn>
        <TableHeaderColumn dataField="released" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">Prev Release</TableHeaderColumn>
        <TableHeaderColumn dataField="sustain" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">Sustain</TableHeaderColumn>
        <TableHeaderColumn dataField="setApart" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">Set Apart</TableHeaderColumn>
        <TableHeaderColumn dataField="mls" editable={{type:'checkbox', options:{values:'Y:N'}}} width="60">In MLS</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
