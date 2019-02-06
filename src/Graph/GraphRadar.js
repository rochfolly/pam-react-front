import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

class GraphRadar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {labels: [], scores:[]};

    this.data = {
      labels: this.props.jeux,
      datasets: [
        {
          label: 'Décembre',
          backgroundColor: 'rgba(0, 51, 102,0.2)',
          borderColor: 'rgb(0, 51, 102)',
          pointBackgroundColor: 'rgba(0, 51, 102,1)',
          pointBorderColor: 'rgb(0, 51, 102)',
          pointHoverBackgroundColor: 'rgb(0, 51, 102)',
          pointHoverBorderColor: 'rgba(0, 51, 102,1)',
          data: this.props.ancient
        },
        {
          label: 'Janvier',
          backgroundColor: 'rgba(235,120,66,0.2)',
          borderColor: 'rgba(235,120,66,1)',
          pointBackgroundColor: 'rgba(235,120,66,1)',
          pointBorderColor: '#eb7842',
          pointHoverBackgroundColor: '#eb7842',
          pointHoverBorderColor: 'rgba(235,120,66,1)',
          data: this.props.scores
        },
        {
          label: 'Février',
          backgroundColor: 'rgba(98, 180, 198,0.2)', //A tester : rgb(54, 132, 150)
          borderColor: 'rgba(98, 180, 198,1)',
          pointBackgroundColor: 'rgba(98, 180, 198,1)',
          pointBorderColor: 'rgb(98, 180, 198)',
          pointHoverBackgroundColor: 'rgb(98, 180, 198)',
          pointHoverBorderColor: 'rgba(98, 180, 198,1)',
          data: this.props.scores
        }
      ]
    }
  } 


  componentDidMount(){
      this.setState({labels: this.props.jeux, scores: this.props.scores}, () => {
      console.log(this.state.scores)
      })

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
