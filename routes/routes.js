module.exports = function(app, connection){
//	var base_url = '/api/';

	app.get('/', function(req, res){
		connection.query("SELECT * FROM products",
			function(err, rows, fields){
				return res.render("products", {products: rows})
			});
	});

	app.get('/products', function(req, res){
		connection.query("SELECT * FROM products",
			function(err, rows, fields){
				return res.render("products", {products: rows})
			});
	});

	app.get('/products/:id', function(req, res){
		connection.query("SELECT * FROM products WHERE id = ?", req.params.id,
			function(err, rows, fields){
				if(err){
					return res.redirect('/');
				}
				if(rows.length === 0){
					return res.redirect('/');
				}
				var product = rows[0];
				return res.render("product", product)

			});
	});

	app.get('/klassen', function(req, res){
		var arr = [
			{name: "1DEV1"},
			{name: "1DEV2"},
			{name: "1DEV3"}
		];
		res.render("klassen", {klassen: arr})
	});
}
