import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

class Settings extends Component {

constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Modal
            isOpen={this.props.isOpen}
            toggle={this.props.toggle}
            className={this.props.className}
            >
            <ModalHeader toggle={this.props.toggle}>
                Settings
            </ModalHeader>
            <ModalBody>
                Ici il faut mettre le form pour changer les infos
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>
                Cancel
            </Button>
            </ModalFooter>
            </Modal>
        </div>
    );
  }
}

export default Settings;


