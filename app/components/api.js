import $ from "jquery";

// API object
var api = {
      // get the list of tables, call the callback when complete
  getCalling: function(cb) {
      console.log("in api.js get tables function");
    var url = "/api/calling";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },
  // get the list of tables, call the callback when complete
  getTables: function(cb) {
      console.log("in api.js get tables function");
    var url = "/api/tables";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },
  // add an table, call the callback when complete
  addTable: function(title, cb) {
    var url = "/api/tables";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        table: {
          'title': title
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });

  },
  // update an table, call the callback when complete
  updateTable: function(table, cb) {
    var url = "/api/tables/" + table.id;
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
//        item: {
//          title: item.title,
//          completed: item.completed
//        }
          table: {
            title: table.title,
            tableData: table.tableData
          }
      }),
      type: 'PUT',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is any error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },
  // delete an table, call the callback when complete
  deleteTable: function(table, cb) {
    var url = "/api/tables/" + table.id;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  }

};

module.exports = api;