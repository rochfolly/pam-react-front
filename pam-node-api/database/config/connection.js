const mysql = require('mysql');

function connection() {
  mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'pam'
  });
} mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'pam'
});

connection.connect((err) => {
  console.log('Connexion à la bdd PAM réussie ')
})

export default connection
