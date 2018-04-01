import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends Component {
  constructor () {
    super();
    this.state = {
      knightPosition:[0,0]
    };
    this.setSquare = this.setSquare.bind(this);
  }

  setSquare(x,y){
   this.setState({knightPosition: [x, y]})
  }

  render() {
   

    return (
      <div className="App">
        <Board 
        knightPosition={this.state.knightPosition}
        setSquare = {this.setSquare}/>
      </div>
    );
  }
}

export default App;
