const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"P@ssword01",
    database:"express",
    multipleStatements:true
});

module.exports = mysqlConnection;