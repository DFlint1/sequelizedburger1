//here we will create the methods that will execute the necessary MYSQL commands
// in the controllers. These are the methods you will need to use in order to retrieve 
// and store data in your database.

// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
	selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
         connection.query(queryString, [valOfCol], function(err, result) {
            return result;
        });
     },
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ';'
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table + '(' + cols + ')' + "VALUES('" + [vals] + "')";
		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
  },
  updateOne: function(table, col_name, burger_id, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += col_name + "=1";
    queryString += " WHERE id=";
    queryString += burger_id;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteOne: function(table, burger_id, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE id = ";
    queryString += burger_id;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
