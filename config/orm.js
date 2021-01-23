// Import the MySQL connection
const connection = require("./connection");

// Object-relational mapping - database interface
const orm = {
    // Get everything from table
    selectAll(table, callback) {
        connection.query("SELECT * FROM ??", table, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne(table, objColsVals, callback) {
        connection.query("INSERT INTO ?? SET ?", [table, objColsVals], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}