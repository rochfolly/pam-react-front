import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Sound from 'react-sound'
import soundfile from '../sample.wav'

class Voice extends Component {
  
    constructor(props) {
    super(props);
     this.state = { playStatus: Sound.status.STOPPED };
  }


  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ playStatus: Sound.status.PLAYING })}
                style={{borderRadius:"100px"}}><h3><i className="fa fa-volume-up"></i></h3></Button>

        <Sound
        url={soundfile}
        playStatus={this.state.playStatus}
        autoLoad
        volume={100}
        />

      </div>
    );
  }
}

export default Voice;