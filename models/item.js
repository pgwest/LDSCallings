// setup Mongoose
import mongoose from 'mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
import findOrCreate from 'mongoose-findorcreate';

import User from './user.js';

// Item schema
var itemSchema = new Schema({
  user: {type: ObjectId, ref: 'users'},
  title: String,
  created: {type: Date, default: Date.now},
  due: {type: Date, default: Date.now},
  completed: Boolean,
});

// ensure schemas use virtual IDs
itemSchema.set('toJSON', {
  virtuals: true
});

// add findorCreate
itemSchema.plugin(findOrCreate);

// create item
var Item = mongoose.model('items', itemSchema);

module.exports = Item;