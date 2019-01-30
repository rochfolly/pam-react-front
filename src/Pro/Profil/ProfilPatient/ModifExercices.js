import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup } from 'reactstrap';
//import './ModifExercices.css';
import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'
import { fetchExos, getOtherExos } from '../../../utils/API'
import game from '../../../Images/dice.png'
import { deletePrescription, updatePrescription } from '../../../utils/API'


class ModifExercices extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', user_id:'', firstname:'', exos:[], others:[], new:'', 
                   ex1:false, ex2:false, ex3:false};

    this.goBackTo = this.goBackTo.bind(this);

  }

 componentDidMount(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params

    this.setState({id: id, user_id: user_id, new:5})
    
    //Afficher les exos déjà accessibles au patient
    fetchExos(user_id).then(res => {
      this.setState({ exos: res.data })
    })

    //Afficher les exos non accessibles au patient
    getOtherExos(user_id).then(res => {
      this.setState({ others: res.data })
    })
   
  } 

  handleChange = event => {
    this.setState({[event.target.name]: !this.state[event.target.name]}, () => console.log(this.state.ex2))
    
  }

  handleSubmit = event => {
   event.preventDefault();
   
   if(this.state.ex1){updatePrescription(1, this.state.user_id)}
   if(this.state.ex2){updatePrescription(2, this.state.user_id)}
   if(this.state.ex3){updatePrescription(3, this.state.user_id)}
   //this.state.ex1 === true ? updatePrescription(1, this.state.user_id) : null
   //(this.state.ex2 === true) ? updatePrescription(2, this.state.user_id) : null
   //(this.state.ex3 === true) ? updatePrescription(3, this.state.user_id) : null
   
   window.location = this.goBackTo()
  }

  logout(){
    sessionStorage.clear()
    window.location = "/"
  }

  goBackTo(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params
    const link = "/profil/" + id + "/patient/" + user_id 
    return link
  }

  
  render() {
    const text = "new"

    const edit = this.state.exos.map((exo) => 
    <FormGroup row>
    <Col sm={1}><Input type="checkbox" defaultChecked/></Col>
    <Col sm={4}><img src={game} alt="jeu" class="Game-logo"/></Col>
    <Col sm={6}><b>Exercice {exo.exo_id} : {exo.exo_name}</b></Col>
    <br/>
    </FormGroup> 
    )

    const others = this.state.others.map((exo) => 
    <FormGroup row>
    <Col sm={1}><Input type="checkbox" value={true} name={exo.label} onChange={this.handleChange}/></Col>
    <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
    <Col sm={6}><b>Exercice {exo.exo_id} : {exo.exo_name}</b></Col>
    <br/>
    </FormGroup>  
    )
    
    return (
      <Container>
      <br/>
      <Form onSubmit={this.handleSubmit}>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Modification</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton">
          <a href={this.goBackTo()}><h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        </Row>
        <br/>
        <Row>
          {edit}
        </Row>
        <br/>
        <Row>
        </Row>
        <br/>
        <Row>
          {others}
        </Row>
        <br/>
        <Row>
           <Button type="submit">Valider</Button>
        </Row>
      </Form>
      <br/>
      <br/>
      </Container>
    );
  }
}

export default ModifExercices;
