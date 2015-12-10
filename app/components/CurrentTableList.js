'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import api from './api.js'

const styles = {};


styles.wrapper = {
  //  background: '#fffff',
  color: '#28363D',
  padding: '10px',

}

styles.border = {
  //  background: '#5B6F79',
  border: '5px solid #5B6F79',

}

styles.padding = {
  //  background: '#5B6F79',
  padding: '5px'

}


styles.headings = {
  //  background: '#5B6F79',
  'textDecoration':'underline', 
  //  'border-bottom': '5px solid #2C4537',

}

var CurrentTableList = React.createClass({
  render: function() {
//    console.log(this.props);
      if(this.props.tables.length == 0){
       var list = <div> <h3> Please add organizations undder the my account tab to be able to edit your ward's callings </h3></div>   
      }
       else{
    var i = 0;
    var list = this.props.tables.map(function(tableDataProps){
//                console.log(tableDataProps);
      if(i==4){
        i=1;
        return <div>  
          <div className='row' style={styles.border}></div>
          <div className="col-sm-3 col-sm-12" style={styles.padding}>
            <h1 style={styles.headings}>{tableDataProps.title}</h1>
            <h2>{tableDataProps.id}</h2>
            <CurrentTable jobs={tableDataProps} /> 
          </div>
        </div>    
      }
      else{
        i++;
        return  <div className="col-sm-3 col-sm-12" style={styles.padding}>
          <h1 style={styles.headings}>{tableDataProps.title}</h1>
          <CurrentTable jobs={tableDataProps} /> 
        </div>
      }
    });
       }
    //        console.log(list);
      
    return <div>
          {list}
    </div>
  }
});

var CurrentTable = React.createClass({
  onAfterSaveCell: function(row, cellName, cellValue){
//    console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
//    console.log("Thw whole row :");
//    console.log(row);
//      console.log('object');
      var table = this.props.jobs;
//      console.log(table);
      api.updateTable(table, this.open);
      
    //    console.log('save');
  },
    open: function(){
    
    },

  render(){
    var cellEditProp = {
      mode: "dbclick",
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell    
    };
    var selectRowProp = {
      mode: "checkbox", // or checkbox
      clickToSelect: true
    };

    //      console.log("jobs = " + jobs + jobs[1].calling);
    //      console.log(this.props.jobs.tableData);
    var jobs = this.props.jobs.tableData;
    
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} striped={true} hover={true} condensed={true}>
        <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center">Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField="calling" width="120" editable={{type:'textarea'}} dataAlign="center">Calling</TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="120" editable={{type:'textarea'}} dataAlign="center">Member Name</TableHeaderColumn>
        <TableHeaderColumn dataField="date" width="80" editable={{type:'textarea'}} dataAlign="center">Called</TableHeaderColumn>
      </BootstrapTable>
    );
  }
});


module.exports = CurrentTableList;