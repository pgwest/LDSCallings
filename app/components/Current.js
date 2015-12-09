import React from 'react'
import CurrentTable from './CurrentTable.js'
import MemberTable from './MemberTable.js'
import CurrentTableList from './CurrentTableList.js'
import api from './api.js'
import Router from 'react-router';
//var Link = Router.Link;
const styles = {};
import History from 'react-router';

import auth from "./auth.js";

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



//React.render(<Example />, mountNode);


//flag a need to change in this and actions by right click

var options = {
 tables : [{
      key: "id",
      title: "Bishopric",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            key: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ],
      }, {
                key: "id1",
                title: "EQ",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      },
      {      key: "id2",
             title: "RS",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      },
        {      key: "id3",
               title: "YM",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     },{       id: "id3",
          calling: "Calling 03",
          name: 'Jonathon Tres3',
          date: '9/8/2004'   
     }
     ]
      },
     {      key: "id4",
               title: "YW",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      }   
     ]
    
}

//NavBar.contextTypes = {
//  history: React.PropTypes.object.isRequired,
//};
    
var Current = React.createClass({

//class Current extends React.Component {
      // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,

  },

  // initial state
  getInitialState: function() {
    return {
      // list of items in the todo list
        tables: {
            tables:[{
      id: "id",
      title: "Bishopric",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            key: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ],
      }, {
                key: "id1",
                title: "EQ",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      },
      {      key: "id2",
             title: "RS",
      tableData :[{
          id: "id",
          calling: "Calling 0",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id1",
          calling: "Calling 1",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 2",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      },
        {      key: "id3",
               title: "YM",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     },{       id: "id3",
          calling: "Calling 03",
          name: 'Jonathon Tres3',
          date: '9/8/2004'   
     }
     ]
      },
     {      key: "id4",
               title: "YW",
      tableData :[{
          id: "id00",
          calling: "Calling 00",
          name: 'Jonathon',
          date: '9/9/2000'
     },{
            id: "id01",
          calling: "Calling 01",
          name: 'Jonathon Tr',
          date: '9/8/2002'   
     }, {       id: "id2",
          calling: "Calling 02",
          name: 'Jonathon Tres',
          date: '9/8/2003'   
     }
     ]
      }   
     ],
        },
    };
  },

//  // when the component loads, get the list items
//  componentWillMount: function() {
//    api.getTables(this.tableSet);
//  },
  // when the component loads, get the list items
  componentDidMount: function() {
    api.getTables(this.tableSet);
  },

  // reload the list of items
  reload: function() {
    api.getTables(this.tableSet);
  },

  // callback for getting the list of items, sets the list state
  tableSet: function(status, data) {
//      console.log(status);
//      console.log(data);
    if (status) {
      // set the state for the list of items
      this.setState({
        tables: data
      });
//        console.log(this.state.tables);
    } else {
      // if the API call fails, redirect to the login page
        this.context.history.pushState(null, '/login');
    }
  },
//      mixins: [ History ],

//                <CurrentTableList {...this.state.options}/>
//        <h2>begin third list</h2>
//        <div className="row"  style={styles.border}>
//                </div>
//     <h2>begin second list</h2>
//
//
//        <CurrentTableList {...options} style={styles.border}/>
    
    
  render: function() {
    return (
      <div style={styles.border}>
 
         <div className="container-fluid" >
                    <CurrentTableList {...this.state.tables}/>
       

                
            </div>

    
                   <div className="row">
                </div>
                <div className="col-md-3 col-md-12" style={styles.wrapper}>
                    <h1 style={styles.headings}>Bishopric</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1 style={styles.headings}>High Priests</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1 style={styles.headings}>Relief Society</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1 style={styles.headings}>Primary</h1>
                    <CurrentTable/>

                </div> 
                    
                <div className="row" style={styles.border}>
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>Elders Quorum</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Sunday School</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Ward Music</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Communications</h1>
                    <CurrentTable/>

                </div>
                
                <div className="row" style={styles.border}>
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>Ward Positions</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Miscellaneous</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Stake Callings</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">
                    <h1>YSA</h1>
                    <CurrentTable/>

                </div>    
                    
                
                                <div className="row" style={styles.border}>
                </div>
                  <div className="col-md-3 col-md-12">
                    <h1>Young Men</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Young Women</h1>
                    <CurrentTable/>
                </div>
                <div className="col-md-3 col-md-12">
                    <h1>Other</h1>
                    <CurrentTable/>

                </div>
                <div className="col-md-3 col-md-12">


                </div>
                
            
                <div className="row" style={styles.border}>
                </div>
                  <div className="col-md-4 col-md-12">
                    <h1>Priests</h1>
                    <MemberTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Teachers</h1>
                    <MemberTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Deacons</h1>
                    <MemberTable/>
                </div>
        
                <div className="row" style={styles.border}>
                </div>
                <div className="row" style={styles.border}>
                  <div className="col-md-4 col-md-12">
                    <h1>Laurels</h1>
                    <MemberTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Mia-Maides</h1>
                    <MemberTable/>
                </div>
                <div className="col-md-4 col-md-12">
                    <h1>Beehives</h1>
                    <MemberTable/>
                </div>
                
                </div>
        
       </div>

        
    )
  }
});


//               <div className="row"  style={styles.border}>
//                </div>
//                <div className="col-md-3 col-md-12" style={styles.wrapper}>
//                    <h1 style={styles.headings}>Bishopric</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1 style={styles.headings}>High Priests</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1 style={styles.headings}>Relief Society</h1>
//                    <CurrentTable/>
//
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1 style={styles.headings}>Primary</h1>
//                    <CurrentTable/>
//
//                </div> 
//                    
//                <div className="row" style={styles.border}>
//                </div>
//                  <div className="col-md-3 col-md-12">
//                    <h1>Elders Quorum</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Sunday School</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Ward Music</h1>
//                    <CurrentTable/>
//
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Communications</h1>
//                    <CurrentTable/>
//
//                </div>
//                
//                <div className="row" style={styles.border}>
//                </div>
//                  <div className="col-md-3 col-md-12">
//                    <h1>Ward Positions</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Miscellaneous</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Stake Callings</h1>
//                    <CurrentTable/>
//
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>YSA</h1>
//                    <CurrentTable/>
//
//                </div>    
//                    
//                
//                                <div className="row" style={styles.border}>
//                </div>
//                  <div className="col-md-3 col-md-12">
//                    <h1>Young Men</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Young Women</h1>
//                    <CurrentTable/>
//                </div>
//                <div className="col-md-3 col-md-12">
//                    <h1>Other</h1>
//                    <CurrentTable/>
//
//                </div>
//                <div className="col-md-3 col-md-12">
//
//
//                </div>
//                
//            
//                <div className="row" style={styles.border}>
//                </div>
//                  <div className="col-md-4 col-md-12">
//                    <h1>Priests</h1>
//                    <MemberTable/>
//                </div>
//                <div className="col-md-4 col-md-12">
//                    <h1>Teachers</h1>
//                    <MemberTable/>
//                </div>
//                <div className="col-md-4 col-md-12">
//                    <h1>Deacons</h1>
//                    <MemberTable/>
//                </div>
//        
//
//                <div className="row" style={styles.border}>
//                </div>
//                  <div className="col-md-4 col-md-12">
//                    <h1>Laurels</h1>
//                    <MemberTable/>
//                </div>
//                <div className="col-md-4 col-md-12">
//                    <h1>Mia-Maides</h1>
//                    <MemberTable/>
//                </div>
//                <div className="col-md-4 col-md-12">
//                    <h1>Beehives</h1>
//                    <MemberTable/>
//                </div>


module.exports = Current;

