var express = require('express');
var app = express();

var routes=require('../routes/index_node');

app.set('view engine','ejs');

routes(app);

app.listen(8080);
console.log('Listening on PORT 8080')