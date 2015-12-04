'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const styles = {};
    

styles.wrapper = {
//  background: '#fffff',
  color: '#28363D',

}

styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
//  'border-bottom': '5px solid #2C4537',

}

  var CurrentTableList = React.createClass({
    render: function() {
        console.log(this.props);
      var list = this.props.tables.map(function(tableDataProps){
//          console.log(tableDataProps);
        return  <div className="col-md-6 col-md-12" style={styles.wrapper}>
                    <h2 style={styles.headings}>{tableDataProps.title}</h2>
                    <CurrentTable jobs={tableDataProps} /> 
                </div>
      });
//        console.log(list);
      return <div>
        {list}
      </div>
    }
  });

//  var options = {
//    thumbnailData:  [{
//      title: 'Show Courses',
//      number: 12,
//      header: 'Learn React',
//      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
//      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
//    },{
//      title: 'Show Courses',
//      number: 25,
//      header: 'Learn Gulp',
//      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
//      imageUrl: 'http://brunch.io/images/others/gulp.png'
//    }]
//  };


var jobs = [];
var jobTypes = ['A','B','C','D'];

function addJobs(quantity) {
  var startId = jobs.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    jobs.push({
      id: id,
      calling: "Calling 1" + id,
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

 var CurrentTable = React.createClass({
  render(){
//      console.log("jobs = " + jobs + jobs[1].calling);
//      console.log(this.props.jobs.tableData);
      jobs = this.props.jobs.tableData;
      
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} striped={true} hover={true} condensed={true} insertRow={true} deleteRow={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center">Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="calling" width="80" editable={{type:'textarea'}} dataAlign="center">Calling</TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="120" editable={{type:'textarea'}} dataAlign="center">Member Name</TableHeaderColumn>
          <TableHeaderColumn dataField="date" width="60" editable={{type:'textarea'}} dataAlign="center">Date Called</TableHeaderColumn>
      </BootstrapTable>
    );
  }
});


module.exports = CurrentTableList;