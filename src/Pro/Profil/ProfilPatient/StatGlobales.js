import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Radar } from 'chart.js';

class StatGlobales extends Component {
  constructor(props) {
    super(props);

    this.chartData = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
        data: [20, 10, 4, 2]
      }]
    }

    this.chartOptions = {
        legend: true,
        gridLines: {
           display: true,
        },
        scale: {
          gridLines: {
            color: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
          },
          pointLabels :{
            fontSize: 12,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            display: false,
            maxTicksLimit: 5
          }
        }
    };



  }
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Statistiques globales du patient</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href="/profil/patient">
          <h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>

      </Container>
    );
  }
}
/* <Radar
    data={this.chartData}
    options={this.chartOptions}
    width="600"
    height="250"
  /> */

export default StatGlobales;
