'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const styles = {}

styles.thumbnail = {
  padding: '10px 20px',
  overflow: 'hidden',
  width: '70%',
  justifyContent: 'center',
  alignItems: 'center'
}

var images = <img src='http://cdn.wordables.com/wp-content/uploads/2015/05/einstein.jpg' style={styles.thumbnail}/>
var jobs = [];
var jobTypes = ['A','B','C','D'];

function addJobs(quantity) {
  var images = [<img src='http://www.startrek.com/legacy_media/images/200307/kirk01/320x240.jpg' style={styles.thumbnail}/>, <img src='http://www.driehausmuseum.org/img/events/Frank-Sinatra.jpg' style={styles.thumbnail}/>, <img src='http://www.namespedia.com/image/Spok_1.jpg' style={styles.thumbnail}/>,<img src='http://cdn.wordables.com/wp-content/uploads/2015/05/einstein.jpg' style={styles.thumbnail}/>,<img src='http://theconfidenceguyonline.com/wp-content/uploads/2010/06/bones.jpg' style={styles.thumbnail}/>,<img src='http://www.startrek.com/legacy_media/images/200307/kirk01/320x240.jpg' style={styles.thumbnail}/> ];
  var names = ['James Kirkland', 'Franz Sinatra', 'Spook Eyebrows', 'Albrecht Meinstein', 'Lenny McCoyl' ];
    
  var startId = jobs.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    jobs.push({
      id: id,
      name: names[i],
      birthday: 'July ' + (3 * i + 4)  + ', 19' + (60 + (8 * i + 4)),
      photo: images[i],
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
      <BootstrapTable data={jobs} striped={true} hover={true} condensed={true} cellEdit={cellEditProp}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center">Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="80" editable={{type:'textarea'}} dataAlign="center">Name</TableHeaderColumn>
          <TableHeaderColumn dataField="birthday" width="60" editable={{type:'textarea'}} dataAlign="center">Birthday</TableHeaderColumn>
          <TableHeaderColumn dataField="photo" width="140"  dataAlign="center" editable={false}>Photo</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
