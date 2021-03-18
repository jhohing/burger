var connection = require("./connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, column, value, cb) => {
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, value, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, column, burgerId, cb) => {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?" ;
        console.log(queryString);

        connection.query(queryString, [table, column, burgerId], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;