import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import Jauge from './Jauge/Jauge.js';

class Statistiques extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
          <Col sm="6">
            <h3 class="titlePAM">Votre évolution</h3>
            <Row>
              <Col><p>Insérer le graph radar ici</p></Col>
            </Row>
          </Col>
          <Col sm="6">
            <Row>
              <Col sm="8">
                <h3 class="titlePAM">Votre progression</h3>
              </Col>
              <Col sm={{size: 2}}><Button className ="smallButton"><a href="/user"><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
              <Col sm={{size: 2}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
            </Row>
            <Row>
            <Jauge />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Statistiques;
