var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended : false});

module.exports = function(app){
	app.use(bodyParser());
	app.get('/cal',urlencodedParser,function(req,res){

		var digit1 = parseInt(req.query.digit1);
		var digit2 = parseInt(req.query.digit2);
		
		res.json({output:digit1+digit2});
	});

};