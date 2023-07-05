import { React, Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Popup from './window';

export default class Burger extends Component {
  render () {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="x" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Saved</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
