import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import Jauge from './Jauge/Jauge.js';
import GraphRadar from '../../Graph/GraphRadar.js'
import './Statistiques.css'
import { getGlobalStats } from '../../../src/utils/API';

class Statistiques extends Component {

  constructor(props){
    super(props);
    this.state = {stats:[]};
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
    getGlobalStats(user_id).then(res => {
      this.setState({stats: res.data}, () => console.log(this.state.stats))
      
    })
  }

  render() {
    const games = this.state.stats[1]
    console.log(games)
    return (
      <Container>
      <br/>
        <Row>
          <Col sm="6">
            <h3 className="titlePAM">Votre évolution</h3>
            <Row><div id="radar"></div></Row>
            <Row>
              <Col><GraphRadar jeux={this.state.stats[1]} scores={this.state.stats[2]}/></Col>
            </Row>
          </Col>
          <Col sm="6">
            <Row>
              <Col sm="8">
                <h3 className="titlePAM">Votre progression</h3>
              </Col>
              <Col sm={{size: 2}}><Button className="smallButton"><a href={this.goBackTo()}><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
              <Col sm={{size: 2}}><Button className="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
            </Row>
            <Row>
            <Jauge />
            </Row> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Statistiques;
