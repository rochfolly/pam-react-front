import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import Jauge from './Jauge/Jauge.js';
import GraphRadar from '../../Graph/GraphRadar.js'
import './Statistiques.css'
import { getGlobalStats, getTotalScore } from '../../../src/utils/API';


class Statistiques extends Component {
  constructor(props){
    super(props);
    this.state = {stats:[], labels:[], scores:[], total:''}

    this.renderRadar = this.renderRadar.bind(this);
    this.radar = this.radar.bind(this);
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
      console.log(res.data[2].bestscores)
      this.setState({stats:[1], labels: res.data[1].titles, scores: res.data[2].bestscores}, () => console.log(this.state.stats[0]))     
    })

    getTotalScore(user_id).then(res => {
      this.setState({total: res.data})
    })
  } 


  
  radar(){
    
  }


  renderRadar(){
    setTimeout(this.radar, 1000)
  }

  render() {

    console.log(this.state.labels)

    const test = this.state.stats.map((stat) => 
     {return (<div><GraphRadar jeux={this.state.labels} scores={this.state.scores}/></div>)})

    return (
      <Container>
      <br/>
        <Row>
          <Col sm="6">
            <h3 className="titlePAM">Votre évolution</h3>
            {test}
            <Row><div id="radar">{this.radar()}</div></Row>
            <Row>
              <Col></Col>
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
            <Jauge score={this.state.total} />
            </Row> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Statistiques;
