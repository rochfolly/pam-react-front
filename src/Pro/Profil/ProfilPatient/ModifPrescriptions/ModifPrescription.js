import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup} from 'reactstrap';
import txtATrou from '../../../../Images/exo1.png';
import bneImg from '../../../../Images/exo3.png';
import jeuImage from '../../../../Images/exo2.png';
import '../../../../Jeux/JeuImage.css';
import { updatePrescription } from '../../../../utils/API'
import '../../AjoutPatient/PremierePrescription/Prescription.css'

const prescriptions = [
  {exo:'', level:'', name:'Texte à trous'}, {exo:'', level:'', name:"Jeu d'Images"}, {exo:'', level:'', name:'La Bonne Image'}
]

class ModifPrescription extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { id: '', user_id:'', firstname:'', name:'', exos:[], ex1:false, ex2:false, ex3:false, ex1level:null, ex2level:null, ex3level:null};
    //this.verifyPrescription = this.verifyPrescription.bind(this)
  }

 componentDidMount(){
    this.props.exos.forEach((exo, index) => {
        if(exo.exo_id === 1){this.setState({ex1:true, ex1level: exo.level})}
        else if(exo.exo_id === 2){this.setState({ex2:true, ex2level: exo.level})}
        else if(exo.exo_id === 3){this.setState({ex3:true, ex3level: exo.level})}
    })
    this.setState({id: sessionStorage.actualDoctor, user_id: sessionStorage.actualUser})
    
  } 

  verifyPrescription(exo_id, array){
    var check = false
    array.forEach((exo, index) => {       
        if(exo.exo_id === exo_id) check = true
    })
    return check
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
    updatePrescription(this.state.user_id, prescriptions)
    window.location = '/profil/' + this.state.id + '/patient/'+ this.state.user_id

   /* createFirstPrescription(this.state.user_id, prescriptions).then(res => {
      window.location = '/profil/' + this.state.id + '/patient/'+ res.data
    })*/

  }

  logout(){
    sessionStorage.clear()
    window.location = '/'
  }

  render() {
    console.log(this.verifyPrescription(1,this.props.exos))
    console.log(this.verifyPrescription(2,this.props.exos))
    console.log(this.verifyPrescription(3,this.props.exos))        

    const display1 = (this.verifyPrescription(1,this.props.exos)) ? 
        <FormGroup row>
            <Input type="checkbox" name="ex1" onChange={this.handleCheck_1} defaultChecked/>
              <Col sm={3}><img src={txtATrou} alt="jeu" className="Game-logo"/></Col>
              <Col sm={9}>
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
                <Col sm={12} className="no-padding">Niveau actuel : <b>{this.state.ex1level}</b></Col> 
              </Row>
              <Row>
                <Col sm={3} className="no-padding">Nouveau Niveau</Col>
                <Col sm={2}>1<Input type="radio" name="exo1"  value={1} id="niv1" onChange={this.handleChange_1}/></Col>
                <Col sm={2}>2<Input type="radio" name="exo1" value={2} id="niv2" onChange={this.handleChange_1}/></Col>
                <Col sm={2}>3<Input type="radio" name="exo1" value={3} id="niv3" onChange={this.handleChange_1}/></Col>
              </Row>
              </Col>
        </FormGroup> : null
    
    const display2 = (this.verifyPrescription(2,this.props.exos)) ? 
        <FormGroup row>
        <Input type="checkbox" name="ex2" onChange={this.handleCheck_2} defaultChecked/>
        <Col sm={3}><img src={jeuImage} alt="jeu" className="Game-logo"/></Col>
        <Col sm={9}>
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
              <Col sm={9} className="no-padding">Niveau actuel : <b>{this.state.ex2level}</b></Col> 
        </Row>
        <Row>
        <Col sm={3} className="no-padding">Nouveau Niveau</Col>
        <Col sm={2}>1<Input type="radio" name="exo2" value={1} id="niv1" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>2<Input type="radio" name="exo2" value={2} id="niv2" onChange={this.handleChange_2}/></Col>
        <Col sm={2}>3<Input type="radio" name="exo2" value={3} id="niv3" onChange={this.handleChange_2}/></Col>
        </Row>
        </Col>
        </FormGroup> : null
    
    const display3 = (this.verifyPrescription(3,this.props.exos)) ? 
        <FormGroup row>
            <Input type="checkbox" name="ex3" onChange={this.handleCheck_3} defaultChecked/>
            <Col sm={3}><img src={bneImg} alt="jeu" className="Game-logo"/></Col>
            <Col sm={9}>
            <Row>Exercice 3 : La bonne image</Row>
            <br/>
            <Row>
              <small>Le joueur doit retrouver l'image correspondant au mot affiché.<br/>
              Au niveau 1 il a le choix entre 2 photos,
              au niveau 2 entre 4 photos.</small>
            </Row>
            <Row>
              <Col sm={9} className="no-padding">Niveau actuel : <b>{this.state.ex3level}</b></Col> 
            </Row>
            <Row>
            <Col sm={3} className="no-padding">Nouveau Niveau</Col>
            <Col sm={2}>1<Input type="radio" name="exo3" value={1} id="niv1" onChange={this.handleChange_3}/></Col>
            <Col sm={2}>2<Input type="radio" name="exo3" value={2} id="niv2" onChange={this.handleChange_3}/></Col>
            </Row>
            </Col>
        </FormGroup> : null

             

    return (
      <Container>
        <hr/>
        
        <Row>
          
          <Form onSubmit={this.handleSubmit}> 
             {display1}
           <hr/>
             {display2}           
            <hr/>
             {display3} 
            <hr/>    

            <Row>
            <Col sm={{size:2, offset:10}}>
              <Button type="submit">Valider</Button>
            </Col>
            </Row>

          </Form> 
        </Row>
      </Container>
    );
  }
}

export default ModifPrescription;