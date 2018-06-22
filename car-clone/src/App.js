import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import NavBar from './NavsAndFooter/NavBar';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App" style = {{overflow: 'hidden'}}>
        <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
