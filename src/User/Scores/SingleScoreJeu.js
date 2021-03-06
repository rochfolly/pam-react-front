import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Scores.css';
import GraphLineaire from '../../Graph/GraphLineaire.js'
import { getSingleStats } from '../../utils/API';


class SingleScoreJeu extends Component {
  constructor(props){
    super(props);
    this.state = {stats:[1], labels:[], scores:[], ancient:[], exo:[]}

  }


  componentDidMount(){
    const { user_id } = this.props.match.params
    const { exo_id } = this.props.match.params

    getSingleStats(user_id, exo_id).then(res => {
        this.setState({exo: res.data}, () => {console.log(this.state.exo)})
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

    const displayed = this.state.exo.map((exo) => 
     {return (
       <Container>
         <Row>
        <Col sm={4}>
          <br/>
          <Row><h4><span className="sous-titre">{exo.title}</span></h4></Row>
          <br/>          
          <Row><h4>Parties jouées : <span className="sous-titre">{exo.plays}</span></h4></Row><br/>
          <Row><h4>Meilleur score : <span className="sous-titre">{exo.bestScore}</span></h4></Row><br/>
          <Row><h4>Dernière partie :<br/> <span className="sous-titre">{exo.lastPlay}</span></h4></Row><br/>
          <Row><h4>Score : <span className="sous-titre">{exo.lastScore}</span></h4></Row><br/>
        </Col>
        <Col sm={8}>
          <GraphLineaire exercice={exo} />
        </Col>
        </Row>
        </Container>
    )}) 


    return (
      <Container>
      <br/>
       <Row>   
       <Col sm={{size: 10}}><h3 className="titlePAM">Statistiques</h3></Col>        
       <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
       <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
       </Row>
       

        {displayed}
       
      </Container>);
  }
}

export default SingleScoreJeu;

//