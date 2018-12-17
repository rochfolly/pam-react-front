let connection = require('../config/connection')

class Doctor {

   static create(body, cb) {
      connection.query('INSERT into doctor SET prenom = ?, nom = ?, email = ?, password = ?, domaine = ?, ville = ?, phone = ?, date_insciption = ?,'
        [body.firstName, body.name, body.email, body.password, body.job, body.city, body.phone, new Date()], (err, result) => {
          if (err) throw (err)
          cb(result)
        }
      )
   }

   static selectAll(cb){
     connection.query('SELECT * from doctor', (err, rows) => {
       if(err) throw err
       cb(rows)
     })
   }

}

module.exports = Doctor
