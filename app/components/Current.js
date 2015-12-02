import React from 'react'
import CurrentTable from './CurrentTable.js'
import MemberTable from './MemberTable.js'
import CurrentTableList from './CurrentTableList.js'

//var Router = require('react-router');
//var Link = Router.Link;
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

//styles.table = {
//      border: '25px solid #2C4537',
//}


//flag a need to change in this and actions by right click

var options = {
 tables : [{
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
     ]
    
}
    
class Current extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Add tables with Callings' }
    ]

    return (
      <div style={styles.border}>
        
         <div className="container-fluid" >
        <CurrentTableList {...options} style={styles.border}/>
                <div className="row"  style={styles.border}>
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
};





module.exports = Current;

