//import app from '../server.js';
import User from './users.js';
import table from './table.js';


// setup body parser
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
import session from 'express-session';

import nodemailer from 'nodemailer';
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcrypt-nodejs';
import async from 'async';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import flash from 'express-flash';
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

app.post('/api/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          console.log('no account with that email');
          return res.redirect('/login');
        }

        user.resetPasswordToken = token;
        console.log('user token set');
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        console.log('password expires');

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
          user: 'ldscallingsapp@gmail.com',
          pass: 'ldscallings.org6313'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/api/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/login');
  });
});

app.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/login');
    }
    res.render('reset', {
      user: req.user
    });
  });
});



app.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
          req.logIn(user, function(err) {
            done(err, user);
          });
        });
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
          user: 'ldscallingsapp@gmail.com',
          pass: 'ldscallings.org6313'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
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
Table.create({title:req.body.table.title,user:user.id,tableData:req.body.table.tableData}, function(err,table) {
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
