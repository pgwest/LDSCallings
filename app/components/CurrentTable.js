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
      name: "Item name " + id,
      type: 'B',
      active: i%2==0?'Y':'N'
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
      <BootstrapTable data={jobs} cellEdit={cellEditProp} insertRow={true} deleteRow={true} selectRow={selectRowProp} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center">Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="120" editable={{type:'textarea'}} dataAlign="center">Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField="type" width="80" editable={{type:'select', options:{values:jobTypes}}} dataAlign="center">Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField="active" width="80" editable={{type:'checkbox', options:{values:'Y:N'}}} dataAlign="center">Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
