import React, { Component } from 'react';
import { Container, Row, Form, Col, Button } from 'reactstrap';
//import './ModifExercices.css';
import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'
import { fetchExos } from '../../../utils/API'


class ModifExercices extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', user_id:'', firstname:'', name:'', email:'', exos:[]};

    this.goBackTo = this.goBackTo.bind(this);

  }

 componentDidMount(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params

    this.setState({id: id, user_id: user_id})

    fetchExos(user_id).then(res => {
      this.setState({ exos: res.data })
    })
   
    
  } 

  logout(){
    localStorage.clear()
    window.location = "/"
  }

  goBackTo(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params
    const link = "/profil/" + id + "/patient/" + user_id 
    return link
  }

  
  render() {
    const edit = this.state.exos.map((exo) => 
    <Col sm="6"><ChoixExercice exo={exo} id={this.state.id} /></Col> 
    )
    
    return (
      <Container>
      <br/>
      <Form>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Modification</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton">
          <a href={this.goBackTo()}><h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        <h3>Exercices accessibles au patient :</h3>
        </Row>
        <br/>
        <Row>
          {edit}
        </Row>
        <br/>
      </Form>
      <br/>
      <br/>
      </Container>
    );
  }
}

export default ModifExercices;
