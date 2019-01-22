import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Button} from 'reactstrap';
import './ChoixExercice.css';
import game from '../../../../Images/dice.png';
import { deletePrescription, updatePrescription } from '../../../../utils/API'


class ChoixExercice extends Component {
  constructor(props){
    super(props);
    this.state = {level:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteAccess = _ => {
    //const {id} = this.props.match.params
    deletePrescription(this.props.exo.exo_id, this.props.id )
    .then(window.location='/profil/patient/'+ this.props.id +'/exercices')
  }

  handleSubmit = event => {
    event.preventDefault()
    updatePrescription(this.state.level, this.props.exo.exo_id, this.props.id)
  }

  handleChange = event => {
    this.setState({level: [event.target.value]})
  }

  componentDidMount(){
    this.setState({level: this.props.exo.level}, () => {console.log(this.state.level)})
    
  }



  render() {
    const level1 = (this.props.exo.level >= 1) ? 
    <Input type="checkbox" value={1} id="niv1" onChange={this.handleChange} defaultChecked/> : <Input type="checkbox" value={1} id="niv1" onChange={this.handleChange}/>
    
    const level2 = (this.props.exo.level >= 2) ? 
    <Input type="checkbox" value={2} id="niv2" onChange={this.handleChange} defaultChecked/> : <Input type="checkbox" value={2} id="niv2" onChange={this.handleChange}/>
    
    const level3 = (this.props.exo.level === 3) ? 
    <Input type="checkbox" value={3} id="niv3" onChange={this.handleChange} defaultChecked/> : <Input type="checkbox" value={3} id="niv3" onChange={this.handleChange}/>

    return (
      <Container>
      <FormGroup row>
      <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
      <Col sm={8}>
      <Row>
        <Col sm={9}><b>Exercice {this.props.exo.exo_id} : {this.props.exo.exo_name}</b></Col>
        <Button onClick={this.deleteAccess}>X</Button>
      </Row>
      <br/>
      <Row>
      <Col sm={3} className="no-padding">Niveau</Col>
      <Col sm={2}>1{level1}</Col>
      <Col sm={2}>2{level2}</Col>
      <Col sm={2}>3{level3}</Col>
      </Row>
      <br/>
      <Row>
        <Col sm={{size:2, offset:10}}>
          <Button onClick={this.handleSubmit}>Valider</Button>
        </Col>
        </Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ChoixExercice;
