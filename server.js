var express = require('express');
var app = express();
var server = require('http').Server(app);

require('./config/middleware.js')(app, express);
require('./config/handlebars.js')(app);

var connection = require('./config/mysql.js')();

require('./routes/api_routes.js')(app, connection);
require('./routes/routes.js')(app, connection);

var port = process.env.PORT || 3000;



server.listen(port, function (){
	console.log('Server listening at port ' + port);
})
