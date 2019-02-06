import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Input, FormGroup } from 'reactstrap';
import './ModifExercices.css';
//import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'
import { checkOther, fetchExos, getOtherExos } from '../../../utils/API'
//import { deletePrescription, updatePrescription } from '../../../utils/API'
import ModifPrescription from './ModifPrescriptions/ModifPrescription';
import AjoutPrescription from './ModifPrescriptions/AjoutPrescription';


class ModifExercices extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', user_id:'', firstname:'', exos:[], others:[], othersexist:'', root:[], new:'', 
                   ex1:false, ex2:false, ex3:false};

    this.goBackTo = this.goBackTo.bind(this);

  }


 componentDidMount(){
    const { user_id } = this.props.match.params
    const { id } = this.props.match.params

    this.setState({id: id, user_id: user_id})
    
    //Afficher les exos déjà accessibles au patient
    fetchExos(user_id).then(res => {
      this.setState({ exos: res.data, root:[1] })
    })

    //Afficher les exos non accessibles au patient
    getOtherExos(user_id).then(res => {
      this.setState({ others: res.data }, () => console.log(this.state.others))
    })

    checkOther(user_id).then(res => {
      this.setState({othersexist: res.data.check})
    })

   
  } 

  verifyOther = user_id => {
    /*var check = false
    checkOther(user_id).then(res => {
      check = res.data.check
      console.log(check)     
      return check
    })*/
    return this.state.othersexist
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
    
  }

  handleSubmit = event => {
   event.preventDefault();
   
   /*if(this.state.ex1){updatePrescription(1, this.state.user_id)}
   if(this.state.ex2){updatePrescription(2, this.state.user_id)}
   if(this.state.ex3){updatePrescription(3, this.state.user_id)} */
   
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
    
    const { user_id } = this.props.match.params

    console.log(this.verifyOther(user_id))
    
    const edit = this.state.root.map((cas) => 
    {return(<ModifPrescription exos={this.state.exos}/>)}) 

    const otherstitle = (this.verifyOther(user_id)) ? <h5>Exercices non prescrits</h5> : ''

    const others = (this.verifyOther(user_id)) ? this.state.root.map((cas) => 
    {return(<AjoutPrescription exos={this.state.others}/>)}) : ''
    
    console.log(this.state.exos)
    
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 className="titlePAM">Modification</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton">
          <a href={this.goBackTo()}><h2><i className="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        </Row>
        <br/>
        <Row>
        <Col sm={{size:"8", offset:"2"}}>
          <h5>Exercices déjà prescrits</h5>
              {edit}
            <br/>
          </Col>
        </Row>
        <Row>
        <Col sm={{size:"8", offset:"2"}}>
              {others}
              <br/>
          </Col>
        </Row>
        
      <br/>
      <br/>
      </Container>
    );
  }
}

export default ModifExercices;
