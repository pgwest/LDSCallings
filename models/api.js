import app from './express.js';
import User from './user.js';
import Item from './item.js';
import table from './table.js';


// setup body parser
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//
// API
//

// register a user
app.post('/api/users/register', function (req, res) {
  // find or create the user with the given username
  User.findOrCreate({username: req.body.username}, function(err, user, created) {
    if (created) {
      // if this username is not taken, then create a user record
      user.name = req.body.name;
      user.set_password(req.body.password);
      user.save(function(err) {
	if (err) {
	  res.sendStatus("403");
	  return;
	}
        // create a token
	var token = User.generateToken(user.username);
        // return value is JSON containing the user's name and token
        res.json({name: user.name, token: token});
      });
    } else {
      // return an error if the username is taken
      res.sendStatus("403");
    }
  });
});

// login a user
app.post('/api/users/login', function (req, res) {
  // find the user with the given username
  User.findOne({username: req.body.username}, function(err,user) {
    if (err) {
      res.sendStatus(403);
      return;
    }
    // validate the user exists and the password is correct
    if (user && user.checkPassword(req.body.password)) {
      // create a token
      var token = User.generateToken(user.username);
      // return value is JSON containing user's name and token
      res.json({name: user.name, token: token});
    } else {
      res.sendStatus(403);
    }
  });
});

// get all items for the user
//get all tables for the user
//app.get('/api/items', function (req,res) 
app.get('/api/tables', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, find all the user's items and return them
      Table.find({user:user.id}, function(err, tables) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
	// return value is the list of items as JSON
	res.json({tables: tables});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// add an item
// add a table
app.post('/api/tables', function (req,res) {
  // validate the supplied token
  // get indexes
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the item for the user
//      Item.create({title:req.body.item.title,completed:false,user:user.id}, function(err,item) {
Table.create({title:req.body.table.title,user:user.id,req.body.table.tableData:[]}, function(err,table) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
	res.json({table:table});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// get an item
//get a table
//app.get('/api/items/:item_id', function (req,res) {
app.get('/api/tables/:table_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
//      Item.findById(req.params.item_id, function(err, item) {
      Table.findById(req.params.table_id, function(err, table) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        // get the item if it belongs to the user, otherwise return an error
        if (table.user != user) {
          res.sendStatus(403);
	  return;
        }
        // return value is the item as JSON
        res.json({table:table});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// update an item
// update a table
//app.put('/api/items/:item_id', function (req,res) {
app.put('/api/tables/:table_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
//      Item.findById(req.params.item_id, function(err,item) {
      Table.findById(req.params.table_id, function(err,table) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        // update the item if it belongs to the user, otherwise return an error
          
//        if (item.user != user.id) {
//          res.sendStatus(403);
//	  return;
//        }
//        item.title = req.body.item.title;
//        item.completed = req.body.item.completed;
//        item.save(function(err) {
        if (table.user != user.id) {
          res.sendStatus(403);
	  return;
        }
        table.title = req.body.table.title;
        table.tableData = req.body.table.tableData;
        table.save(function(err) {
	  if (err) {
	    res.sendStatus(403);
	    return;
	  }
          // return value is the item as JSON
          res.json({table:table});
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// delete an item
// delete a table
app.delete('/api/tables/:table_id', function (req,res) {
//app.delete('/api/items/:item_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Table.findByIdAndRemove(req.params.table_id, function(err,table) {
//                Item.findByIdAndRemove(req.params.item_id, function(err,item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});
