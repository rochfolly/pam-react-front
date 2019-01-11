import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class GraphLineaire extends Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: ['11/01', '13/01', '15/01', '17/01', '19/01', '20/01', '21/01'],
      datasets: [
        {
          label: 'Résultats des dernières parties',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(244,205,179,0.2)',
          borderColor: 'rgb(235,120,66)',
          pointBorderColor: 'rgb(242,164,92)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 3,
          pointHoverBackgroundColor: 'rgb(235,120,66)',
          pointHoverBorderColor: 'rgba(244,205,179,0.2)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [23, 33, 25, 28, 34, 32, 29]
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Line data={this.data} />
      </div>
    );
  }
}

export default GraphLineaire;
