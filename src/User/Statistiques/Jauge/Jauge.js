import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'reactstrap';
import './Jauge.css'

class Jauge extends Component {
  constructor(props){
    super(props);

    const max = 10000
    const niveau = parseInt(this.props.score/max) + 1
    const restant = this.props.score % max
    const height = (512 - 112) - ((restant - 0) / (max - 0)) * (512 - 112 - 20)

    this.state = {maxScore:max, rest:restant, hauteur:height, niv:niveau}
    console.log("state", this.state)
  }

  
  /* Calcul de la hauteur de la jauge :
    - minimum = 0
    - maximum = 1000
    - marge_bas = 112px (quand elle est vide, au moins une hauteur de 112px orange )
    - marge_haut = 20px
    - hauteur (totale) = 512px
    - note = le nb de points / 10 du patient

    Pour savoir quelle est la hauteur de la jaugevide :
    hauteur = (hauteur - marge_bas) - ((note - minimum) / (maximum - minimum)) * (hauteur - marge_bas - marge_haut)
    */

  componentDidMount(){
  {
    var elem = this.refs.jaugevide
    var pos = 512;
    var hauteur = Math.trunc(this.state.hauteur)
    console.log(hauteur)
    var id = setInterval(frame, 0.5);
      function frame() {
        if (pos === hauteur) {
          clearInterval(id);
        } else {
          pos--; 
          elem.style.height =  pos + 'px';
        }
      }
    }
  }

   
  render() {

    const niveau = parseInt(this.props.score/this.state.maxScore) + 1
    const restant = this.props.score % this.state.maxScore

    return (
      <Container>
      <br/>
        <Row>
          <Col sm="3">
          <div className="jaugepleine">
            <div id="jaugevide" ref="jaugevide"></div>
          </div>
          </Col>
          <Col sm="9" className="scoreJauge">
          <p>Niveau {niveau} <br/> {restant}/{this.state.maxScore} </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Jauge;
