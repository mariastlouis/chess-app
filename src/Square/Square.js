import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import Knight from '../Knight/Knight';
import Bishop from '../Bishop/Bishop';

class Square extends Component  {
  constructor () {
    super();
    this.state = {
      validMove: []
    }
  }

// = ({squareColor, knightPosition, bishopPosition, squareX, squareY, setSquare, selectPiece, chessPiece}) =>


checkColor() {
  const mode = this.props.gameMode;
  let modeColor;
  if (mode === 'standard') {
    modeColor = 'gray'
  } else if (mode === 'democrat'){
    modeColor = 'blue'
  } else {
      modeColor = 'red'
    }
  return this.reflectColor(modeColor)
}

  reflectColor(modeColor) {
    const color = this.props.squareColor ? 'white' : modeColor
    return color
  }

displayPiece(){
   const [knightX, knightY] = this.props.knightPosition;
    const piece = (this.props.squareX === knightX && this.props.squareY === knightY) ?
    <Knight mode = {this.props.gameMode} /> : null;
  return piece;
}

displayBishop (){
  const [bishopX, bishopY] = this.props.bishopPosition;
  const bishop = (this.props.squareX === bishopX && this.props.squareY === bishopY) ? 
  <Bishop mode = {this.props.gameMode}/> : null;
  return bishop;
}

hoverSquare = event => {
  const id = event.target.id
  const piece = this.props.chessPiece
  if (piece === 'knight') {
    this.checkKnightMove(id)
  } 
}

// checkKnightMove(id) {
//   const arrayId = id.split("").map(Number)
//   const [x, y] = arrayId;
//   console.log(arrayId)
//   const [knightX, knightY] = this.props.knightPosition;
//   const moveX = Math.abs(x - knightX);
//   const moveY = Math.abs(y - knightY);
//    if((moveX === 2 && moveY === 1) || (moveX === 1 && moveY === 2) ){
//     this.setState({validMove: [x, y]})
//     console.log(this.state.validMove)
//      console.log('valid move')
//      this.validColor(id)

//     } else {
//      console.log('invalid move')
//     }

// }

// validColor(id){

// }

 //onMouseOver = {this.hoverSquare}>
  render () {
    const {squareColor, knightPosition, bishopPosition, squareX, squareY, setSquare, selectPiece, chessPiece} = this.props
  return (

    <div className = "Square">
      <div className = {`oneSquare ${this.checkColor()}`}>
        <div 
        className = "piece-container"
        id= {`${squareX}${squareY}`}
        onClick={ () => setSquare(squareX, squareY)}>     
          {this.displayPiece()}
          {this.displayBishop()}
        </div>   

      </div>
    </div>
  );
}
};

export default Square;

Square.propTypes = {
  squareColor: PropTypes.bool,
  knightPosition: PropTypes.array,
  bishopPosition: PropTypes.array,
  squareX: PropTypes.number,
  squareY: PropTypes.number,
  setSquare: PropTypes.func,
  selectPiece: PropTypes.func,
  chessPiece: PropTypes.string,
  gameMode: PropTypes.string
}
