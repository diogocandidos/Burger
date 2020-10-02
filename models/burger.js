// Import orm file
var orm = require("../config/orm.js");


var burger = {

    selectAll: function(callback) {
        orm.selectAll('burgers', function(res) 
        {
            callback(res);
        });
    },

    insertOne: function (nameBurger, callback) {
        orm.insertOne('burgers', ["name", "devoured"], [nameBurger, false], function(res) 
        {
            callback(res);
        });
    },

    updateOne: function (colVal, condition, callback) {
        orm.updateOne('burgers', colVal, condition, function(res) 
        {
            callback(res);
        });
    },

};

module.exports = burger;