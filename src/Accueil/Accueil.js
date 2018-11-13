import React, { Component } from 'react';
import logo from '../Images/logoPAM.png';
import './Accueil.css';


class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Accueil">
        <img src={logo} className="Accueil-logo" alt="logoPAM" />
        <h1> Bienvenue ! Veuillez vous identifier : </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="mail" value={this.state.value} placeholder="Email" onChange={this.handleChange} />
        </label>
        <label>
          <input type="password" value={this.state.value} placeholder="Mot de passe"onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Vous n'avez pas de compte et vous êtes professionnel de santé ?</p>
      <p>Créez votre compte ici ! </p>
      </div>
    );
  }
}

export default Accueil;
