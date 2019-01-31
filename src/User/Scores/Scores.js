import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Scores.css';
import ScoreJeu from './ScoreJeu.js'
import { getStats } from '../../utils/API';

class Scores extends Component {
  constructor(props){
    super(props);
    this.state = {stats:[]}
  }

  goBackTo(){
    const {user_id} = this.props.match.params
    const link = "/user/" + user_id
    return link
  }
  
  logout(){
    sessionStorage.clear()
    window.location = '/'
  }

  componentDidMount(){
    const { user_id } = this.props.match.params

    getStats(user_id).then(res => {
     this.setState({stats: res.data})
     console.log(res.data)
    })

  }

  render() {
    const displayed = this.state.stats.map((exercice) => 
      <Col sm="6"><ScoreJeu exo={exercice}/></Col>
    )

    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Vos scores</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/><br/>
        <Row>
        {displayed}
        </Row>
        <br/>
      </Container>
    );
  }
}

export default Scores;
