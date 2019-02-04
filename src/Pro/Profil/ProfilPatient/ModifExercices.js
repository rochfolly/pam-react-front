import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup } from 'reactstrap';
import './ModifExercices.css';
import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'
import { fetchExos, getOtherExos } from '../../../utils/API'
import { deletePrescription, updatePrescription } from '../../../utils/API'


class ModifExercices extends Component {
  constructor(props) {
    super(props);

    this.state = { id: '', new_id:'', firstname:'', name:'', exos:[], ex1:false, ex2:false, ex3:false, ex1level:1, ex2level:1, ex3level:1}
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
    <div>
      <Row>
    <Input type="checkbox" defaultChecked/>
    <Col sm={3}><img src={require(`../../../Images/exo${exo.exo_id}.png`)} alt="jeu" className="Game-logo"/></Col>
    <Col sm={8}>
      <Row><b>Exercice {exo.exo_id} : {exo.exo_name}</b></Row>
      <br/>
      <Row><small>Description à sortir de la bdd</small></Row>
      <br/>
      <Row>
        <Col sm={3} className="no-padding">Niveau</Col>
        <Col sm={2}>1<Input type="radio" name={exo.exo_id} value={1} id="niv1" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>2<Input type="radio" name={exo.exo_id} value={2} id="niv2" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>3<Input type="radio" name={exo.exo_id} value={3} id="niv3" onChange={this.handleChange_2}/></Col>
      </Row>
      <br/>
    </Col>
    </Row>
    <hr/>
    </div>
    )

    const others = this.state.others.map((exo) => 
    <div>
    <Row>
    <Input type="checkbox" value={true} name={exo.label} onChange={this.handleChange}/>
    <Col sm={3}><img src={require(`../../../Images/exo${exo.exo_id}.png`)} alt="jeu" className="Game-logo"/></Col>
    <Col sm={8}>
      <Row><b>Exercice {exo.exo_id} : {exo.exo_name}</b></Row>
      <br/>
      <Row><small>Description à sortir de la bdd</small></Row>
      <br/>
      <Row>
        <Col sm={3} className="no-padding">Niveau</Col>
        <Col sm={2}>1<Input type="radio" name={exo.exo_id} value={1} id="niv1" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>2<Input type="radio" name={exo.exo_id} value={2} id="niv2" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>3<Input type="radio" name={exo.exo_id} value={3} id="niv3" onChange={this.handleChange_2}/></Col>
      </Row>
      <br/>
    </Col>
    <br/>
    </Row>
    <hr/> 
    </div> 
    )
    
    return (
      <Container>
      <br/>
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
          <Col sm={{size:"8", offset:"3"}}>
          <Form onSubmit={this.handleSubmit}>
            <hr/>
              {edit}
              {others}
            <br/>
            <Row>
              <Button type="submit">Valider</Button>
            </Row>
          </Form>
          </Col>
        </Row>
        
      <br/>
      <br/>
      </Container>
    );
  }
}

export default ModifExercices;
