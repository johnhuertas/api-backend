const mysql = require("mysql2");

const con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


//Convert pool object to promise based object
const mysqlCon = con.promise();

module.exports = mysqlCon;
