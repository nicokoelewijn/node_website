module.exports = function(app, connection){
	var base_url = '/api/';

	// app.post(base_url + 'products', function(req, res){
	// app.delete(base_url + 'products', function(req, res){

	app.get(base_url + 'products', function(req, res){
		connection.query("SELECT * FROM products",
			function(err, rows, fields){
				if(err){
					return res.send(err);
				}
				if(rows.length === 0){
					return res.send([]);
				}

				return res.send(rows);

			});
	});

	app.get(base_url + 'products/:id', function(req, res){
		connection.query("SELECT * FROM products WHERE id = ?", req.params.id,
			function(err, rows, fields){
				if(err){
					return res.send(err);
				}
				if(rows.length === 0){
					return res.send({});
				}

				return res.send(rows[0]);

			});
	});
}
