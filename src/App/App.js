import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends Component {
  constructor () {
    super();
    this.state = {
      knightPosition:[6,6]
    };
    this.setSquare = this.setSquare.bind(this);
  }

  setSquare(x,y){
    const [knightX, knightY] = this.state.knightPosition
    const moveX = Math.abs(x - knightX);
    const moveY = Math.abs(y - knightY);

    if((moveX === 2 && moveY === 1) || (moveX === 1 && moveY === 2) ){
      this.setState({knightPosition: [x, y]})
    } else {
      console.log('invalid move')
    }
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
