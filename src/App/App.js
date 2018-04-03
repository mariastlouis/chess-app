import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import ControlPanel from '../ControlPanel/ControlPanel';


class App extends Component {
  constructor () {
    super();
    this.state = {
      knightPosition: [1,7],
      bishopPosition: [2, 7],
      gameMode: 'standard',
      selectedPiece: '',
      message: 'To move the pieces, first click on a piece and then click on the square you want it to move to. Note that the pieces can only make valid chess moves'
    };
    this.setSquare = this.setSquare.bind(this);
    this.checkMoveValid = this.checkMoveValid.bind(this);
    this.setMode = this.setMode.bind(this);
  }

  checkSelectedPiece(x, y) {
    const piece = this.state.selectedPiece;

    if (piece) {
      this.checkMoveValid(x, y);
    } else {
      this.setState({message: 'Select a piece to move'});
    }
  }

  checkMoveValid(x, y) {
    if (this.state.selectedPiece === 'knight') {
      this.moveKnight(x, y);
    } else {
      this.moveBishop(x,y);
    }
  }

  setMode(mode) {
    this.setState({gameMode: mode});
  }

  checkSquareDuplicate(x,y) {
    const [knightX, knightY] = this.state.knightPosition;
    const [bishopX, bishopY] = this.state.bishopPosition;

    if ((this.state.selectedPiece === 'knight') && (bishopX === x && bishopY === y)) {
      this.setState({message: 'Invalid move. Move to a space that is not occupied by the bishop'});
    } else if ((this.state.selectedPiece === 'bishop') && (knightX === x && knightY === y)) {
      this.setState({message: 'Invalid move. Move to a space that is not occupied by the knight'});
    } else {
      this.checkMoveValid(x, y);
    }
  }



  moveKnight(x,y) {
    const [knightX, knightY] = this.state.knightPosition;
    const moveX = Math.abs(x - knightX);
    const moveY = Math.abs(y - knightY);

    if ((moveX === 2 && moveY === 1) || (moveX === 1 && moveY === 2) ) {

      this.setState({knightPosition: [x, y]});
      this.setState({message: 'Valid knight move. Select another piece to move'});
      this.setState({selectedPiece: ''});

    } else {
      this.setState({message: 'Invalid move -- knights can only move in an L shape'});
    }
  }

  moveBishop(x, y) {
    const [bishopX, bishopY] = this.state.bishopPosition;
    const moveX = Math.abs(x - bishopX);
    const moveY = Math.abs(y - bishopY);

    if (moveX === 1 && moveY === 1) {
      this.setState({bishopPosition: [x, y]});
      this.setState({message: 'Valid bishop move. Select another piece to move'});
      this.setState({selectedPiece: ''});
    } else {
      this.setState({message: 'Invalid move - bishops can only move diagonally'});
    }
  }

  setSquare(x, y) {
   
    const piece = this.state.selectedPiece;

    if (piece) {
      this.checkSquareDuplicate(x,y);
    } else {
      this.setSelect(x,y);
    }
  }

  setSelect (x, y) {
    const [knightX, knightY] = this.state.knightPosition;
    const [bishopX, bishopY] = this.state.bishopPosition;

    this.setState({message: ''});
    if (knightX === x && knightY === y) {
      this.setState({selectedPiece: 'knight'});
    } else if (bishopX === x && bishopY === y ) {
      this.setState({selectedPiece: 'bishop'});
    } else {
      this.checkSelectedPiece(x, y);
    }
  }

  render() {
    return (
      <div className="app">
       
        <div className = "sider">
          <ControlPanel 
            message = {this.state.message}
            chessPiece = {this.state.selectedPiece}
            mode = {this.setMode}/>
        </div>
        <div className = "game-board">
          <Board 
            knightPosition={this.state.knightPosition}
            bishopPosition = {this.state.bishopPosition}
            setSquare = {this.setSquare}
            chessPiece = {this.state.selectedPiece}
            selectPiece = {this.selectPiece}
            checkMoveValid = {this.checkMoveValid}
            gameMode = {this.state.gameMode}/>
        </div>
      </div>
    );
  }
}

export default App;
