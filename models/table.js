// setup Mongoose
import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
import findOrCreate from 'mongoose-findorcreate';

import User from './user.js';

var tableSchema = new Schema({
  user: {type: ObjectId, ref: 'users'},
  id: String,
  title: String,
  tableData: [],
});



// ensure schemas use virtual IDs
tableSchema.set('toJSON', {
  virtuals: true
});

// add findorCreate
tableSchema.plugin(findOrCreate);

// create item
var Table = mongoose.model('tables', tableSchema);

module.exports = Table;






//TablesSchema.methods.addCalling = function(cb) {
//  this.tableData.push({
//      id: cb.id,
//      calling: cb.calling,
//      name: cb.name,
//      date: cb.date
//      });
//  this.save(cb);
//};

//mongoose.model('Tables', TablesSchema);


//[{
//      id: "id",
//      title: "Bishopric",
//      tableData :[{
//          id: "id",
//          calling: "Calling 0",
//          name: 'Jonathon',
//          date: '9/9/2000'
//        },
//        {
//          key: "id1",
//          calling: "Calling 1",
//          name: 'Jonathon Tr',
//          date: '9/8/2002'   
//        }, {       
//          id: "id2",
//          calling: "Calling 2",
//          name: 'Jonathon Tres',
//          date: '9/8/2003'   
//        }
//     ]
// }   
//]