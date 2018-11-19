import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Accueil from './Accueil/Accueil.js';

/* var db = require('./db')

app.use('/comments', require('./controllers/comments'))
app.use('/users', require('./controllers/users'))

// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
}) */


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Accueil />
      </BrowserRouter>
    );
  }
}

export default App;
