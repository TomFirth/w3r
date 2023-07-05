import { React, Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Search extends Component {
  render () {
    return (
      <Button variant="primary" type="submit" onClick={this.props.openWindow}>
        Search
      </Button>
    );
  }
}
