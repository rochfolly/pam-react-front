const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const SELECT_ADMINS = 'SELECT name FROM admin';

 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pam'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.get('/', (req, res) => {
  res.send('go to /admins to see all the developpers')
});

app.get('/admins', (req, res) => {
  connection.query(SELECT_ADMINS, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  })
});

app.listen(8080)
/*
connection.query('CREATE TABLE people(id int primary key, name constchar(255), age int, address text)', function(err, result) {
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

// const data = {
//   tables: {
//     people: [
//      {id: 1, name: "John", age: 32},
//      {id: 2, name: "Peter", age: 29},
//     ],
//     cars: [
//       {id: 1, brand: "Jeep", model: "Cherokee", owner_id: 2},
//       {id: 2, brand: "BMW", model: "X5", owner_id: 2},
//       {id: 3, brand: "Volkswagen", model: "Polo", owner_id: 1},
//     ],
//   },
// }

/*db.connect(db.MODE_PRODUCTION, function() {
  db.fixtures(data, function(err) {
    if (err) return console.log(err)
    console.log('Data has been loaded...')
  })
}) */
