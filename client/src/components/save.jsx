import { React, Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Save extends Component {
  render () {
    return (
      <Button variant="primary" type="submit" onClick={this.props.openWindow}>
        Save
      </Button>
    );
  }
}
