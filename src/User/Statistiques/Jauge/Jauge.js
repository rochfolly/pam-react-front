import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './Jauge.css'
import jaugeVide from '../../../Images/jauge_vide.png';
import jaugePleine from '../../../Images/jauge_pleine.png';


class Jauge extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
          <Col sm="3">
          <div class="jaugepleine" >
            <div class="jaugevide" ></div>
          </div>
          </Col>
          <Col sm="9" className="scoreJauge">
          <p>Niveau X <br/> xx/10 </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jauge;
