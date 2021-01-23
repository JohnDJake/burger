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
    // Insert one thing into the table
    insertOne(table, objColsVals, callback) {
        connection.query("INSERT INTO ?? SET ?", [table, objColsVals], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    // Update one thing in the table
    updateOne(table, objColsVals, condition, callback) {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, objColsVals, condition], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;