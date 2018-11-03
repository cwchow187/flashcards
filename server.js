var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require("path");

var mysql = require('mysql');

app.set('view engine', 'ejs');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "film_db"

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));


app.get('/', function(req, res){
	connection.query(
	    "SELECT * FROM film_actors",
	    function(err, response) {
	     	res.render('index', {
	     		questions: response
	     	});
	    }
	  );
	
});

app.get('/film_actors', function(req, res){
  connection.query(
      "SELECT * FROM film_actors",
      function(err, response) {
        res.json(response);
      }
    );
});





app.listen(3000, function(){
	console.log('listening on 3000');
});
