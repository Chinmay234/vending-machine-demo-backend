var mysql = require('mysql2');
var config = require('../configs')

var con = mysql.createPool({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.name
}).promise();
        
return con;