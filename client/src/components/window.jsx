import { React, Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle } from 'react-bootstrap';

export default class Window extends Component {
  state = {
    isOpen: null,
    title: null
  }

  handleChange = (e) => this.setState({title: e.target.value})

  render () {
    return (
      <Modal
        show={this.props.isOpen} 
        onHide={this.props.closeModal}>
        <ModalHeader closeButton>
          <ModalTitle>{this.state.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {this.props.input}
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
            {this.state.title}
          </Button>
        </ModalFooter>
      </Modal>
      // share
    );
  }
}
