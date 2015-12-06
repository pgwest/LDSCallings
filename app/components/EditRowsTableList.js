'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { ProgressBar, Popover, Tooltip, Button, Modal } from 'react-bootstrap';
import api from './api.js'

const styles = {};
    
var tables = {};

styles.wrapper = {
//  background: '#fffff',
  color: '#28363D',

}

styles.border = {
//  background: '#5B6F79',
  border: '5px solid #5B6F79',

}

styles.padding = {
 padding: '10px',   
}


styles.headings = {
//  background: '#5B6F79',
  'textDecoration':'underline', 
//  'border-bottom': '5px solid #2C4537',

}


const Example = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

    login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var callingName = this.refs.username.value;
    if (!callingName) {
      return;
    }
//        console.log(callingName);
//        console.log(this.props);
        this.props.tableData.push({
      id: Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 1000) + 1) + Math.floor((Math.random() * 100) + 1),
      calling: callingName,
      name: "",
      date: ''
    });
        console.log(this.props);
        api.updateTable(this.props);
        
    },
    
  render() {
    var popover = <Popover title="popover">very popover. such engagement</Popover>;
    var tooltip = <Tooltip>wow.</Tooltip>;

    
    
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          Insert
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" placeholder="Calling Name" ref="username" autoFocus={true} />
          <input className="btn btn-warning" type="submit" value="Add Row" />
          {this.state.error ? (
             <div className="alert">Invalid.</div>
           ) : null}
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});



  var CurrentTableList = React.createClass({
        getInitialState() {
//                  console.log('tableprops');
//        console.log(this.props);
            return{
//        tables : this.props
            }
  },
    render: function() {
//                  console.log('tableprops');
//        console.log(this.props);
//        console.log('table');
//        console.log(this.state.tables);
//        this.props = tables;
     var i = 0;   
      var list = this.props.tables.map(function(tableDataProps){
//          console.log('tabledataprops');
//          console.log(tableDataProps);
          if(i==3){
          i=1;
        return <div>  
            <div className='row' style={styles.border}></div>
            <div className="col-md-4 col-md-12" style={styles.padding}>
                    <h2 style={styles.headings}>{tableDataProps.title}</h2>
                    <Example {...tableDataProps} />
                    <CurrentTable jobs={tableDataProps} /> 
                </div>
                </div>    
          }
          else{
          i++;
        return  <div className="col-md-4 col-md-12" style={styles.padding}>
                    <h2 style={styles.headings}>{tableDataProps.title}</h2>
                    <Example {...tableDataProps} />
                    <CurrentTable jobs={tableDataProps} /> 
                </div>
          }
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
  clickToSelect: true,
  onSelect: onSelect    
};

function onSelect(row, isSelected){
    console.log('on select');
    console.log(row);
    console.log(isSelected);
};



//var options = {
//    onSelect: onSelect
//}
 var CurrentTable = React.createClass({
  render(){
//      console.log("jobs = " + jobs + jobs[1].calling);
//      console.log(this.props.jobs.tableData);
      jobs = this.props.jobs.tableData;
      
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} striped={true} hover={true} condensed={true} insertRow={false} deleteRow={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true} dataAlign="center" width="10">Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="calling" width="120" editable={{type:'textarea'}} dataAlign="center">Calling</TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="120" editable={{type:'textarea'}} dataAlign="center">Member Name</TableHeaderColumn>
          <TableHeaderColumn dataField="date" width="120" editable={{type:'textarea'}} dataAlign="center">Date Called</TableHeaderColumn>
      </BootstrapTable>
    );
  }
});


module.exports = CurrentTableList;