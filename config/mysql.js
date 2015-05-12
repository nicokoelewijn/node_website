module.exports = function(){
	var mysql = require('mysql');

	var connection = mysql.createConnection({
		host: process.env.MYSQL_HOST,
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASS
	});
	return connection;
}
