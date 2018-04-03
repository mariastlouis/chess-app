import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Square from '../Square/Square';


const Board = ({knightPosition, bishopPosition, setSquare, chessPiece, selectPiece, gameMode}) => {
  const displaySquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const squareColor = (x + y) % 2 === 1;
    const [knightX, knightY] = knightPosition;

    return (

      <div className = "square-container">
        <Square squareColor = {squareColor}
          knightPosition = {knightPosition}
          bishopPosition = {bishopPosition}
          squareX = {x}
          squareY = {y}
          setSquare = {setSquare}
          selectPiece = {selectPiece}
          chessPiece = {chessPiece}
          gameMode = {gameMode}/>
      </div>
    );
  };

  const allSquares = () => {
    const squareArray = [];

    for (let i = 0; i < 64; i++) {
      squareArray.push(displaySquare(i));
    }
    return squareArray;
  };

  return (
    <div className = "board">
      {allSquares()}
    </div>
  );
};

export default Board;

Square.propTypes = {
  knightPosition: PropTypes.array,
  bishopPosition: PropTypes.array,
  setSquare: PropTypes.func,
  chessPiece: PropTypes.string,
  selectPiece: PropTypes.func,
  checkMoveValid: PropTypes.func,
  gameMode: PropTypes.string
};