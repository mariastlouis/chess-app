import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends Component {
  constructor () {
    super();
    this.state = {
      knightPosition:[1,7],
      bishopPosition: [2, 7],
      selectedPiece: ''
    };
    this.setSquare = this.setSquare.bind(this);
  }

  selectPiece(type) {
    console.log(type)
  }

  checkSelectedPiece(x, y) {
    const piece = this.state.selectedPiece;
    if (piece) {
      this.checkMoveValid(x, y)
    } else {
      console.log('Select a piece to move')
    }
  }

  checkMoveValid(x, y) {
    if (this.state.selectedPiece === 'knight') {
      this.moveKnight(x, y)
    } else {
      this.moveBishop(x,y)
    }
  }

  moveKnight(x,y){
        const [knightX, knightY] = this.state.knightPosition
    const moveX = Math.abs(x - knightX);
    const moveY = Math.abs(y - knightY);

    if((moveX === 2 && moveY === 1) || (moveX === 1 && moveY === 2) ){
      this.setState({knightPosition: [x, y]})
    } else {
      console.log('invalid move')
    }
  }

  moveBishop(x, y) {
    const [bishopX, bishopY] = this.state.bishopPosition
    const moveX = Math.abs(x - bishopX);
    const moveY = Math.abs(y - bishopY);

    if(moveX === 1 && moveY === 1) {
      this.setState({bishopPosition: [x, y]})
    } else {
      console.log('invalid move')
    }
  }

// first time you click on a square it selects the piece if it can.
// next time you click a square it moves

// click on a knight or bishop to select it
// once selected - then click on a square and move that selected piece if it is valid and if it doesn't hit another piece

  setSquare (x, y) {
    const [knightX, knightY] = this.state.knightPosition;
    const [bishopX, bishopY] = this.state.bishopPosition;
    console.log(this.state.selectedPiece)
    if(knightX === x && knightY === y) {
      this.setState({selectedPiece: 'knight'})
    } else if (bishopX === x && bishopY === y ){
      this.setState({selectedPiece: 'bishop'})
      // checkBishopPosition(x,y)
    } else {
      this.checkSelectedPiece(x, y)
  }
}

  render() {
   

    return (
      <div className="App">
        <Board 
        knightPosition={this.state.knightPosition}
        bishopPosition = {this.state.bishopPosition}
        setSquare = {this.setSquare}
        chessPiece = {this.state.selectedPiece}
        selectPiece = {this.selectPiece}/>
      </div>
    );
  }
}

export default App;
