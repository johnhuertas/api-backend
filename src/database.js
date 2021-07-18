const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: '3.228.5.145',
    user: 'root',
    password: '1234',
    database: 'company'
});

mysqlConnection.connect(function (err){
    if (err) {
        console.log(err);
        return;
    }else{
        console.log("base de datos conectada");
    }
});

module.exports = mysqlConnection;