import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup, Label } from 'reactstrap';
import game from '../../../../Images/dice.png';
import '../../../../Jeux/JeuImage.css';
import { showUser } from '../../../../utils/API'

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, new_id:'', firstname:'', name:''};
  }

  handleCheck(){
    this.setState({checked: !this.state.checked})
  }

  render(){
    return(
      <Input type="checkbox" value={this.props.value} onChange={this.handleCheck} />
    )

  }
}

class PremierePrescription extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', new_id:'', firstname:'', name:'', exos:[], ex1level:'', ex2level:'', ex3level:''};

  }

 componentDidMount(){
    const { id } = this.props.match.params    
    const { newuser_id } = this.props.match.params
    this.setState({id: id, new_id: newuser_id})    
    showUser(newuser_id).then(res => {
        this.setState({
          firstname: res.data.firstname,
          name: res.data.name,
          email: res.data.email
        })
      })
  } 

  handleChange_1 = event => {
    this.setState({ ex1level: event.target.value }, () => console.log(this.state.ex1level))
    
  }

  handleChange_2 = event => {
    this.setState({ ex2level: event.target.value })
  }

  handleChange_3 = event => {
    this.setState({ ex3level: event.target.value })
  }
 
  handleSubmit = event => {
    event.preventDefault();

  }

  render() {

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}> 
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Prescrption d'Exercices</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href="/profil"><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
          <FormGroup row>
            <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
            <Col sm={8}>
            <Row>
            <Col sm={3}><Input type="checkbox" checked={this.state.exos[0] === 1} /></Col>
             <Col sm={9}><b>Exercice 1 : Texte à Trous</b></Col>
            </Row>
            <br/>
            <Row>
              <Col sm={3} className="no-padding">Niveau</Col>
              <Col sm={2}>1<Input type="checkbox" value={1} id="niv1" onChange={this.handleChange_1} defaultChecked/> </Col>
              <Col sm={2}>2<Input type="checkbox" value={2} id="niv2" onChange={this.handleChange_1}/></Col>
              <Col sm={2}>3<Input type="checkbox" value={3} id="niv3" onChange={this.handleChange_1} /></Col>
            </Row>
            <br/>
            <Row>
             <Col sm={9}><b>Exercice 2 : Jeu d'Images</b></Col>
            </Row>
            <br/>
            <Row>
              <Col sm={3} className="no-padding">Niveau</Col>
              <Col sm={2}>1<Input type="checkbox" value={1} id="niv1" onChange={this.handleChange_2} defaultChecked/> </Col>
              <Col sm={2}>2<Input type="checkbox" value={2} id="niv2" onChange={this.handleChange_2}/></Col>
              <Col sm={2}>3<Input type="checkbox" value={3} id="niv3" onChange={this.handleChange_2} /> </Col>
            </Row>
            <br/>
            <Row>
             <Col sm={9}><b>Exercice 3 : La Juste Image</b></Col>
            </Row>
            <br/>
            <Row>
              <Col sm={3} className="no-padding">Niveau</Col>
              <Col sm={2}>1<Input type="checkbox" value={1} id="niv1" onChange={this.handleChange_3} defaultChecked/> </Col>
              <Col sm={2}>2<Input type="checkbox" value={2} id="niv2" onChange={this.handleChange_3}/></Col>
              <Col sm={2}>3<Input type="checkbox" value={3} id="niv3" onChange={this.handleChange_3} /></Col>
            </Row>
            <br/>
            <Row>
             <Col sm={{size:2, offset:10}}>
              <Button type="submit">Valider</Button>
             </Col>
            </Row>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default PremierePrescription;