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
      name: "Calling " + id,
      birthday: 'Jonathon Thatcher',
      photo: 'photo id: ' + id,
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
          <TableHeaderColumn dataField="name" width="80" editable={{type:'textarea'}} dataAlign="center">Name</TableHeaderColumn>
          <TableHeaderColumn dataField="birthday" width="80" editable={{type:'textarea'}} dataAlign="center">Birthday</TableHeaderColumn>
          <TableHeaderColumn dataField="photo" width="100" editable={{type:'textarea'}} dataAlign="center">Picture</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
