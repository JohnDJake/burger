// Set up MySQL connection
const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: process.env.WSL_HOST_IP || "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

// Connect to the server
connection.connect(err => {
    if (err) return console.error(`error connecting: ${err.stack}`);
    console.log(`connected as id ${connection.threadId}`);
});

// Export the connection
module.exports = connection;