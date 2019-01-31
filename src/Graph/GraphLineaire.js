import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class GraphLineaire extends Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: this.props.exercice.dates,
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
          data: this.props.exercice.values
        }
      ]
    }
  }

  render() {
    console.log(this.props.exercice.dates)
    return (
      <div>
        <Line data={this.data} />
      </div>
    );
  }
}

export default GraphLineaire;
