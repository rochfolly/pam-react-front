import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Jauge.css'


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
          <p>Niveau 1 <br/> 5/10 </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jauge;
