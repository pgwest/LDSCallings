'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var jobs = [];
var jobTypes = ['A','B','C','D'];

function addJobs(quantity) {
  var startId = jobs.length;
  for (var i = 0; i < quantity; i++) {
//    var id = startId + i;
            var id = Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 1000) + 1) * Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 100) + 1) * Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 100) + 1);
    jobs.push({
      id: id,
      calling: "Calling " + id,
      name: 'Jonathon Thatcher',
      date: '9/8/1982',
    });
  }
}

function onAfterSaveCell(row, cellName, cellValue){
  console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
  console.log("Thw whole row :");
  console.log(row);
}



addJobs(5);

var cellEditProp = {
  mode: "dbclick",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell    
};

var selectRowProp = {
  mode: "checkbox", // or checkbox
  clickToSelect: true
};

export default class EditTypeTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} striped={true} hover={true} condensed={true}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center">Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="calling" width="80" editable={{type:'textarea'}} dataAlign="center">Calling</TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="120" editable={{type:'textarea'}} dataAlign="center">Member Name</TableHeaderColumn>
          <TableHeaderColumn dataField="date" width="60" editable={{type:'textarea'}} dataAlign="center">Date Called</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
