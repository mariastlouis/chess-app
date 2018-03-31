import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board knightPosition={[1, 0]}/>
      </div>
    );
  }
}

export default App;
