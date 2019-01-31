import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class GraphRadar extends Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: ['Jeu 1', 'Jeu 2', 'Jeu 3', 'Jeu 4', 'Jeu 5', 'Jeu 6', 'Jeu 7'],
      datasets: [
        {
          label: 'Décembre',
          backgroundColor: 'rgba(244,205,179,0.2)',
          borderColor: 'rgb(244,205,179)',
          pointBackgroundColor: 'rgba(244,205,179,1)',
          pointBorderColor: '#f4cdb3',
          pointHoverBackgroundColor: '#f4cdb3',
          pointHoverBorderColor: 'rgba(244,205,179,1)',
          data: [65, 59, 60, 51, 56, 55, 63]
        },
        {
          label: 'Janvier',
          backgroundColor: 'rgba(235,120,66,0.2)',
          borderColor: 'rgba(235,120,66,1)',
          pointBackgroundColor: 'rgba(235,120,66,1)',
          pointBorderColor: '#eb7842',
          pointHoverBackgroundColor: '#eb7842',
          pointHoverBorderColor: 'rgba(235,120,66,1)',
          data: [60, 55, 45, 67, 58, 60, 75]
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <Radar data={this.data} height={500} width={1000} />
      </div>
    );
  }
}
export default GraphRadar;
