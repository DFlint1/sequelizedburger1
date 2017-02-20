// here we will import orm.js into here
// We will create the code that will call the ORM functions using burger specific
// input for the ORM.

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	selectWhere: function(burgerName,cb){
		orm.selectWhere('burgers','burger_name', burgerName,function(res){
			cb(res)
		}); 
	}, 
  insertOne: function(col,name,cb) {
  	orm.insertOne('burgers',col,name,function(res){
      cb(res);
    });
  },
  selectAll: function(cb){
		//select all function used to load display with DB data from table burgers.
		orm.selectAll('burgers',function(res){
			cb(res);
		});
	},
  updateOne: function(table,col,id,cb) {
    orm.updateOne("burgers",col,id, function(res) {
      cb(res);
    });
  },
  deleteOne: function(table,id,cb) {
    orm.deleteOne("burgers",id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
