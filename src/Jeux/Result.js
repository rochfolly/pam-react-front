import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './Result.css'
import trophy from '../Images/trophy.png'

var reponse = [];

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {question:0, result:null}
    }

    componentDidMount(){
        const resultat = localStorage.getItem("resultat") 
        localStorage.clear("resultat")
        if(resultat){
        var score = 0
        this.setState({result: score})
        const veryfinal = JSON.parse(resultat)
        var length = Object.keys(veryfinal).length
        for(var i = 0; i < length; i++){
          score += veryfinal[i].score
          reponse.push(veryfinal[i].score) 
          if(i===length-1){this.setState({result: score})}
        }
      }
    }

    render() {

        const final = (this.state.result) ? this.state.result : 'Nope'
        //const final = this.state.result

        var indents = [];

        for (var i = 0; i < reponse.length; i++) {
        indents.push(<Row key={i}><h3>Exercice {i+1} : {reponse[i]}</h3></Row>);
        }

        return (
            <Container>
                <br/>
                <Row>
                <Col sm={{size: 5}}>
                    <Row>
                        <h3 className="titlePAM">Félicitations !</h3>           
                    </Row>
                    <Row><h6 id="sous-titre">Voici vos résultats :</h6></Row>            
                </Col>
                <Col sm="5"><h6 className="titlePAM"><img src={trophy} alt="" style={{height:"150px"}}></img></h6></Col>
                <Col sm={{size: 1}}><Button className ="smallButton"><a href="/user"><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
                <Col sm={{size: 1}}><Button className ="smallButton"><h2><i className="fa fa-power-off"></i></h2></Button></Col>
                </Row>
                <Row>
                    <Col sm={{size:8, offset:1}}>
                    {indents}
                    <br/>
                    </Col>
                    <Col sm="3">
                        <br/><br/><br/>
                    <Row>
                        <h2 className="titlePAM">Total : {final}</h2></Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Result;
