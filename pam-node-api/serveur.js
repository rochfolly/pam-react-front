var http = require('http');
var url = require('url');
var mysql = require('mysql')
var db = require('./db')

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    else{
      res.writeHead(404);
      res.write('Erreur');
    }
    res.end();
});
server.listen(8080);

/* var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pam'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
    if (err) throw err
    connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
      if (err) throw err
      connection.query('SELECT * FROM people', function(err, results) {
        if (err) throw err
        console.log(results[0].id)
        console.log(results[0].name)
        console.log(results[0].age)
        console.log(results[0].address)
      })
    })
  })
})  */

var data = {
  tables: {
    people: [
     {id: 1, name: "John", age: 32},
     {id: 2, name: "Peter", age: 29},
    ],
    cars: [
      {id: 1, brand: "Jeep", model: "Cherokee", owner_id: 2},
      {id: 2, brand: "BMW", model: "X5", owner_id: 2},
      {id: 3, brand: "Volkswagen", model: "Polo", owner_id: 1},
    ],
  },
}

/*db.connect(db.MODE_PRODUCTION, function() {
  db.fixtures(data, function(err) {
    if (err) return console.log(err)
    console.log('Data has been loaded...')
  })
}) */
