import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import GraphRadar from '../../../Graph/GraphRadar.js'
import './StatGlobales.css'
import { getGlobalStats, getStats, showUser } from '../../../utils/API'
// import ScoreJeu from '../../../User/Scores/ScoreJeu'


class StatGlobales extends Component {
  constructor(props) {
    super(props);

    this.state = {firstname:'', stats:[], labels:[], scores:[], previous:[], ancient:[], lines:[], total:''}

    this.chartData = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
        data: [20, 10, 4, 2]
      }]
    }

    this.chartOptions = {
        legend: true,
        gridLines: {
           display: true,
        },
        scale: {
          gridLines: {
            color: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
          },
          pointLabels :{
            fontSize: 12,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            display: false,
            maxTicksLimit: 5
          }
        }
    };

  }

  componentDidMount(){
    const { user_id } = this.props.match.params
    getGlobalStats(user_id).then(res => {
      console.log(res.data)
      this.setState({stats:[1], labels: res.data[1].titles, scores: res.data[2].bestscores, previous:res.data[3].previouscores, ancient:res.data[4].oldscores}, () => console.log(this.state))     
    })

    getStats(user_id).then(res => {
      this.setState({lines: res.data}, ()=> console.log(this.state.lines))  
     })

     showUser(user_id).then(res=>{
       this.setState({firstname: res.data.firstname})
     })

  } 

  goBackTo(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params
    const link = "/profil/" + id + "/patient/" + user_id 
    return link
  }
  
  logout(){
    sessionStorage.clear()
    window.location = '/'
  }
  
  
  render() {

    // const displayed = this.state.lines.map((exercice) => 
    //   <Col sm="6"><ScoreJeu exo={exercice}/></Col>
    // )

    const graph = this.state.stats.map((stat) => 
     {return (<div><GraphRadar jeux={this.state.labels} scores={this.state.scores} previous={this.state.previous} ancient={this.state.ancient}/></div>)})

    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 className="titlePAM">Statistiques globales de {this.state.firstname}</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}>
          <h2><i className="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
           <div id="radar">{graph}</div>
        </Row>

      </Container>
    );
  }
}

export default StatGlobales;
