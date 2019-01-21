import React, { Component } from 'react';
import { Container, Row, Form, Col, Button } from 'reactstrap';
//import './ModifExercices.css';
import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'
import { fetchExos } from '../../../utils/API'


class ModifExercices extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, id: '', firstname:'', name:'', email:'', exos:[]};

  }

 componentDidMount(){
    const { id } = this.props.match.params

    fetchExos(id).then(res => {
      this.setState({ exos: res.data })
    })
   
    
  } 

  render() {
    const edit = this.state.exos.map((exo) => 
    <Col sm="6"><ChoixExercice exo={exo} /></Col> 
    )
    
    return (
      <Container>
      <br/>
      <Form onSubmit={this.handleSubmit}>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Modification</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton">
          <a href="/profil/patient"><h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
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
        <Row>
        <Col sm={{size:2, offset:10}}>
          <Button>Valider</Button>
        </Col>
        </Row>
      </Form>
      <br/>
      <br/>
      </Container>
    );
  }
}

export default ModifExercices;
