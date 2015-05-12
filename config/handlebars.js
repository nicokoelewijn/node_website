module.exports = function(app){
	var express_handlebars = require('express-handlebars');

	var handlebars = express_handlebars.create({
		extname: '.hbs',
		defaultLayout: 'main',
		partialsDir: './views/partials'
	});

	app.engine('hbs', handlebars.engine);
	app.set('view engine', 'hbs');
	app.set('views','./views');
}
