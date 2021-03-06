import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup} from 'reactstrap';
import txtATrou from '../../../../Images/exo1.png';
import bneImg from '../../../../Images/exo3.png';
import jeuImage from '../../../../Images/exo2.png';
import '../../../../Jeux/JeuImage.css';
import { showUser, createFirstPrescription } from '../../../../utils/API'
import './Prescription.css'

const prescriptions = [
  {exo:'', level:'', name:'Texte à trous'}, {exo:'', level:'', name:"Jeu d'Images"}, {exo:'', level:'', name:'La Bonne Image'}
]

class PremierePrescription extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', new_id:'', firstname:'', name:'', exos:[], ex1:false, ex2:false, ex3:false, ex1level:1, ex2level:1, ex3level:1};

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

  goBackTo(){
    const {id} = this.props.match.params
    const link = "/profil/" + id 
    return link
  }

  handleCheck_1 = event => {
    this.setState({[event.target.name]: !this.state.ex1}, () => console.log(this.state.ex1));
  }

  handleCheck_2 = event => {
    this.setState({[event.target.name]: !this.state.ex2}, () => console.log(this.state.ex2));
  }

  handleCheck_3 = event => {
    this.setState({[event.target.name]: !this.state.ex3}, () => console.log(this.state.ex3));
  }

  handleChange_1 = event => {
    this.setState({ ex1level: event.target.value }, () => console.log(this.state.ex1level))
    
  }

  handleChange_2 = event => {
    this.setState({ ex2level: event.target.value }, () => console.log(this.state.ex2level))
  }

  handleChange_3 = event => {
    this.setState({ ex3level: event.target.value }, () => console.log(this.state.ex3level))
  }
 
  handleSubmit = event => {
    event.preventDefault();

    prescriptions[0].exo = (this.state.ex1) ? 1 : null
    prescriptions[1].exo = (this.state.ex2) ? 2 : null
    prescriptions[2].exo = (this.state.ex3) ? 3 : null

    prescriptions[0].level = this.state.ex1level
    prescriptions[1].level = this.state.ex2level
    prescriptions[2].level = this.state.ex3level

    console.log(prescriptions)
    createFirstPrescription(this.state.new_id, prescriptions).then(res => {
      console.log(res.data)
      window.location = '/profil/' + this.state.id 
    })

  }

  logout(){
    sessionStorage.clear()
    window.location = '/'
  }

  render() {


    return (
      <Container>
        <br/>
        <Row>
        <Col sm={{size: 10}}><h3 className="titlePAM">Prescription d'exercices</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/><br/>
        <Row>
          <Col sm={{size:"8", offset:"2"}}>
          <Form onSubmit={this.handleSubmit}> 
            <hr/>
            <FormGroup row>
            <Input type="checkbox" name="ex1" onChange={this.handleCheck_1} />
            <Col sm={3}><img src={txtATrou} alt="jeu" className="Game-logo"/></Col>
            <Col sm={8}>
            <Row>Exercice 1 : Texte à Trous</Row>
            <br/>
            <Row>
              <small>Le joueur doit retrouver le mot manquant d'une phrase.<br/>
              Au niveau 1 il a le choix entre 4 mots très différents,
              niveau 2 entre 4 mots plus proches,
              niveau 3 il doit retrouver seul le mot.</small>
            </Row>
            <br/>
            <Row>
            <Col sm={3} className="no-padding">Niveau</Col>
            <Col sm={2}>1<Input type="radio" name="exo1"  value={1} id="niv1" onChange={this.handleChange_1}/></Col>
            <Col sm={2}>2<Input type="radio" name="exo1" value={2} id="niv2" onChange={this.handleChange_1}/></Col>
            <Col sm={2}>3<Input type="radio" name="exo1" value={3} id="niv3" onChange={this.handleChange_1}/></Col>
            </Row>
            </Col>
            </FormGroup>
            <hr/>

            <FormGroup row>
            <Input type="checkbox" name="ex2" onChange={this.handleCheck_2}/>
            <Col sm={3}><img src={jeuImage} alt="jeu" className="Game-logo"/></Col>
            <Col sm={8}>
            <Row>Exercice 2 : Jeu d'Images</Row>
            <br/>
            <Row>
              <small>Le joueur doit retrouver le mot correspondant à l'image affichée. <br/>
              Au niveau 1 il a le choix entre 5 mots très différents,
              niveau 2 entre 5 mots plus proches
              niveau 3 il doit retrouver seul le mot.</small>
            </Row>
            <br/>
            <Row>
            <Col sm={3} className="no-padding">Niveau</Col>
            <Col sm={2}>1<Input type="radio" name="exo2" value={1} id="niv1" onChange={this.handleChange_2}/></Col>
            <Col sm={2}>2<Input type="radio" name="exo2" value={2} id="niv2" onChange={this.handleChange_2}/></Col>
            <Col sm={2}>3<Input type="radio" name="exo2" value={3} id="niv3" onChange={this.handleChange_2}/></Col>
            </Row>
            </Col>
            </FormGroup>
            <hr/>

            <FormGroup row>
            <Input type="checkbox" name="ex3" onChange={this.handleCheck_3} />
            <Col sm={3}><img src={bneImg} alt="jeu" className="Game-logo"/></Col>
            <Col sm={8}>
            <Row>Exercice 3 : La bonne image</Row>
            <br/>
            <Row>
              <small>Le joueur doit retrouver l'image correspondant au mot affiché.<br/>
              Au niveau 1 il a le choix entre 2 photos,
              au niveau 2 entre 4 photos.</small>
            </Row>
            <br/>
            <Row>
            <Col sm={3} className="no-padding">Niveau</Col>
            <Col sm={2}>1<Input type="radio" name="exo3" value={1} id="niv1" onChange={this.handleChange_3}/></Col>
            <Col sm={2}>2<Input type="radio" name="exo3" value={2} id="niv2" onChange={this.handleChange_3}/></Col>
            </Row>
            </Col>
            </FormGroup>
            <hr/>

            <Row>
            <Col sm={{size:2, offset:10}}>
              <Button type="submit">Valider</Button>
            </Col>
            </Row>

            </Form>
          </Col>
        </Row>
        <br/>
      </Container>
    );
  }
}

export default PremierePrescription;