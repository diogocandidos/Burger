// Import require connection.js
var connection = require("./connection");

// Creates an array of question marks and turns it into a string.
function printQM(num) {
    var array = [];
      for (var i = 0; i < num; i++) {
      array.push("?");
    }
  
    return array.toString();
  }
  
// Convert object to SQL syntax
function objToSql(object) {
    var array = [];
    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          
          array.push(key + "=" + value);
        }
      }
    
      return array.toString();
    }

// Create the methods that will execute the necessary MySQL commands in the controllers. 
// ORM - Object-Relational Mapping

var orm = {

    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString, 
            function(err, data) {
            if (err) {
            throw err;
            }

          callback(data);
        });

    },

    insertOne: function (table, column, values, callback) {
      var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += column.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQM(values.length);
      queryString += ") ";

      console.log("INSERT" + queryString);
      connection.query(queryString, values, function(err, data) {
        if (err) {
          throw err;
        }
  
        callback(data);
      });

    },

    updateOne: function (table, colVal, condition, callback) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(colVal);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log("UPDATE" + queryString);
      connection.query(queryString, function(err, data) {
        if (err) {
          throw err;
        }
  
        callback(data);
      });
    },

};

//Export Model
module.exports = orm;
