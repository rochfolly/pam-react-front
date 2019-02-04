import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Scores.css';
import game from '../../Images/dice.png';
import GraphLineaire from '../../Graph/GraphLineaire.js'
import { getSingleStats } from '../../utils/API';


class SingleScoreJeu extends Component {
  constructor(props){
    super(props);
    this.state = {stats:[1], labels:[], scores:[], ancient:[], exo:[]}

  }

  componentDidMount(){
    const { id } = this.props.match.params
    const { user_id } = this.props.match.params
    const { exo_id } = this.props.match.params

    getSingleStats(user_id, exo_id).then(res => {
        this.setState({exo: res.data})
    })
  }

  render() {

    const displayed = this.state.exo.map((exo) => 
     {return (<Container>
      <Row>
      
      <Col sm={9}>
      <Row><b>{exo.title}</b></Row>
      <Row>Parties jouées : {exo.plays}</Row>
      <Row>Meilleur score : {exo.bestScore}</Row>
      <Row>Dernière partie : {exo.lastPlay}</Row>
      <Row>Score : {exo.lastScore}</Row>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col><GraphLineaire exercice={exo} /></Col>
      </Row>
    </Container>)})

    console.log(this.state)


    return (<div>{displayed}</div>);
  }
}

export default SingleScoreJeu;

//