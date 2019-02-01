import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Jauge.css'
import { getTotalScore } from '../../../utils/API';

class Jauge extends Component {
  constructor(props){
    super(props);
  }
   
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
          <p>Total <br/> {this.props.score} </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jauge;
