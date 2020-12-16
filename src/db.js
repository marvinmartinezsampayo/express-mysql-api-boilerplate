const mysql = require('mysql');
const connection = mysql.createConnection(process.env.MYSQL_ADDON_URI);

connection.connect();

module.exports = connection;