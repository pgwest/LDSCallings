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
      calling: "Item name " + id,
      candidate: 'B',
      thinking: i%2==0?'Y':'N',
      decided:  i%2==0?'Y':'N',
      called: i%2==0?'Y':'N',
      released: i%2==0?'Y':'N',
      sustain: i%2==0?'Y':'N',
      setApart: i%2==0?'Y':'N',
      mls: i%2==0?'Y':'N'
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
      <BootstrapTable data={jobs} cellEdit={cellEditProp} insertRow={true} deleteRow={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" editable={{type:'textarea'}}>Calling</TableHeaderColumn>
          <TableHeaderColumn dataField="type" editable={{type:'textarea'}}>Candidate</TableHeaderColumn>
          <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Thinking</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Decided</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Called</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Prev. Released</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Sustain</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Set Apart</TableHeaderColumn>
        <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>In MLS</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
