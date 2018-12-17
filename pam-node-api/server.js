const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();
const userRouter = express.Router()
let connection = require('./database/config/connection')

const Doctor = require('./database/tables/doctor')

const SELECT_ADMINS = 'SELECT * from admin'

app.get('/', (req, res) => {
  res.redirect('/back')
});

userRouter.get('/', (req, res) => {
  res.send('go to /admins to see all the developpers')
})

userRouter.post('/doctor', (req, res) => {
    Doctor.create(req.body, function() {
      console.log('Docteur ' +req.body.name+ ' ajouté')
    })
})

userRouter.get('/doctors', (req, res) => {
    Doctor.selectAll((doctors) => {
      res.json(doctors)
    })
})

userRouter.get('/admins', (req, res) => {
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

app.use('/back', userRouter)

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
