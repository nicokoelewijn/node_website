module.exports = function(app, express){

	var compression = require('compression');
	var body_parser = require('body-parser');
	var method_override = require('method-override');

	require('dotenv').load();

	app.use(compression());

	app.use(body_parser.urlencoded({extended: true}));
	app.use(body_parser.json());

	app.use(method_override());

	app.use(express.static('./public'));
}
