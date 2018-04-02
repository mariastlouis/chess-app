import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import ControlPanel from '../ControlPanel/ControlPanel'


class App extends Component {
  constructor () {
    super();
    this.state = {
      knightPosition:[1,7],
      bishopPosition: [2, 7],
      selectedPiece: '',
      message: ''
    };
    this.setSquare = this.setSquare.bind(this);
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
      this.setState({message: ''})
    } else {
      this.setState({message: 'Invalid move -- knights can only move in an L shape'})
    }
  }

  moveBishop(x, y) {
    const [bishopX, bishopY] = this.state.bishopPosition
    const moveX = Math.abs(x - bishopX);
    const moveY = Math.abs(y - bishopY);

    if(moveX === 1 && moveY === 1) {
      this.setState({bishopPosition: [x, y]})
      this.setState({message: ''})
    } else {
       this.setState({message: 'Invalid move - bishops can only move diagonally'})
    }
  }

  setSquare (x, y) {
    const [knightX, knightY] = this.state.knightPosition;
    const [bishopX, bishopY] = this.state.bishopPosition;
    console.log(this.state.selectedPiece)
    if(knightX === x && knightY === y) {
      this.setState({selectedPiece: 'knight'})
    } else if (bishopX === x && bishopY === y ){
      this.setState({selectedPiece: 'bishop'})
    } else {
      this.checkSelectedPiece(x, y)
  }
}

  render() {
    return (
      <div className="app">
        <div className = "game-board">
          <Board 
          knightPosition={this.state.knightPosition}
          bishopPosition = {this.state.bishopPosition}
          setSquare = {this.setSquare}
          chessPiece = {this.state.selectedPiece}
          selectPiece = {this.selectPiece}/>
        </div>
        <div className = "sider">
          <ControlPanel message = {this.state.message}
                        chessPiece = {this.state.selectedPiece}/>
        </div>
      </div>
    );
  }
}

export default App;
