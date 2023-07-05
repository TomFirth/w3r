import { Component, React, setState } from 'react';
import { ModalDialog } from 'react-bootstrap';
import { Burger, Search, Save, Map, Window } from './components'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    isOpen: false
  }

  openModal = () => setState({ isOpen: true });
  closeModal = () => setState({ isOpen: false });
  handleSubmit = () => ({
    //some code
  });
  openWindow = () => ({
    // set state for window
  })

  render() {
    return (
      <>
        <ModalDialog />
        { this.state.isOpen ? 
          <Window
            closeModal={this.closeModal} 
            isOpen={this.state.isOpen} 
            handleSubmit={this.handleSubmit}
          />
          : null
        }
        <Burger
          className="menu"
        />
        <Search
          className="search"
        />
        <Save
          className="save"
        />
        <Map />
      </>
    );
  }
}

export default App;
