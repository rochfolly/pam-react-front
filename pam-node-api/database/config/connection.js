const mysql = require('mysql');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'pam'
});

connection.connect((err) => {
  console.log('Connexion à la bdd PAM réussie ')
})

module.exports = connection
