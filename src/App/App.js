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
      message: 'To move the pieces, first click on a piece and then click on the square you want it to move to. Note that the pieces can only make valid chess moves'
    };
    this.setSquare = this.setSquare.bind(this);
  }

  checkSelectedPiece(x, y) {
    const piece = this.state.selectedPiece;
    if (piece) {
      this.checkMoveValid(x, y)
    } else {
      this.setState({message: 'Select a piece to move'})
    }
  }

  checkMoveValid(x, y) {
    if (this.state.selectedPiece === 'knight') {
      this.moveKnight(x, y)
    } else {
      this.moveBishop(x,y)
    }
  }

  // if there is a piece selected && if the new x, y coordinate equals the same coordinate of the other piece, then you can't move


   checkSquareDuplicate(x,y) {
    const [knightX, knightY] = this.state.knightPosition;
    const [bishopX, bishopY] = this.state.bishopPosition;
    if((this.state.selectedPiece === 'knight') && (bishopX === x && bishopY === y)) {
      this.setState({message: 'Invalid move. Move to a space that is not occupied by the bishop'})
    } else if ((this.state.selectedPiece === 'bishop') && (knightX === x && knightY === y)){
        this.setState({message: 'Invalid move. Move to a space that is not occupied by the knight'})
    } else {
      this.checkMoveValid(x, y)
    }
  }



  moveKnight(x,y){
    const [knightX, knightY] = this.state.knightPosition
    const moveX = Math.abs(x - knightX);
    const moveY = Math.abs(y - knightY);

    if((moveX === 2 && moveY === 1) || (moveX === 1 && moveY === 2) ){

      this.setState({knightPosition: [x, y]})
      this.setState({message: 'Valid knight move. Select another piece to move'})
      this.setState({selectedPiece: ''})
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
      this.setState({message: 'Valid bishop move. Select another piece to move'})
      this.setState({selectedPiece: ''})
    } else {
       this.setState({message: 'Invalid move - bishops can only move diagonally'})
    }
  }

  // setSquare(x,y) {
  //   if(piece) {

  //   }
  // }

// need to check to see if the piece you are clicking already contains the coordinates for the other piece
// error is happening when you are trying to switch over pieces. You have a knight selected and are trying to select a bishop piece. You only want the error on move to happen if it is a valid move. If it is not a valid move, it should proceed as normal. 
  // 1. click on a piece
  // 2. if the piece you clicked on equals the same coordinates as the knight or bishop piece, that piece is selected in the state
// 3. if it does not equal the coordinates - it then checks to see if a piece is already selected
// 4. if a piece is already selected - then it checks to see if the position you want to move to is a valid chess move
// 5. if it's valid, the piece moves. if it is not valid, the piece doesn't move and you get an error message
  
  // if this.state.selectedPiece == knight & xy coordinates you get === bishop coordinates then you can't move. and if the selected piece is a bishop and the xy coordinates === knight coordinates then you can't move


  setSquare(x, y) {
   
    const piece = this.state.selectedPiece;

    if(piece) {
      this.checkSquareDuplicate(x,y)
    } else {
      this.setSquare2(x,y)
    }
  }

  //   checkSquareDuplicate(x,y) {
  //   const [knightX, knightY] = this.state.knightPosition;
  //   const [bishopX, bishopY] = this.state.bishopPosition;
  //   if((this.state.selectedPiece === 'knight') && (bishopX === x && bishopY === y)) {
  //     this.setState({message: 'Invalid move. Move to a space that is not occupied by the bishop'})
  //   } else if ((this.state.selectedPiece === 'bishop') && (knightX === x && knightY === y)){
  //       this.setState({message: 'Invalid move. Move to a space that is not occupied by the knight'})
  //   } else {
  //     console.log('can move')
  //     this.checkMoveValid(x, y)
  //   }
  // }



  setSquare2 (x, y) {
    const [knightX, knightY] = this.state.knightPosition;
  
    const [bishopX, bishopY] = this.state.bishopPosition;
   



      this.setState({message: ''})
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
