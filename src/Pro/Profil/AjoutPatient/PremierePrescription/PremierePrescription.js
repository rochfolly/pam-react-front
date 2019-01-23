import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup } from 'reactstrap';
import game from '../../../../Images/dice.png';
//import './ModifExercices.css';
import { showUser } from '../../../../utils/API'


class PremierePrescription extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', new_id:'', firstname:'', name:'', exos:[]};

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

  render() {
    const level1 = <Input type="checkbox" value={1} id="niv1" onChange={this.handleChange} defaultChecked/> 
    
    const level2 = <Input type="checkbox" value={2} id="niv2" onChange={this.handleChange}/>
    
    const level3 = <Input type="checkbox" value={3} id="niv3" onChange={this.handleChange} /> 

    return (
      <Container>
        <Form> 
          <FormGroup row>
            <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
            <Col sm={8}>
            <Row>
             <Col sm={9}><b>Exercice 1 : Texte à Trous</b></Col>
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
        </Form>
      </Container>
    );
  }
}

export default PremierePrescription;