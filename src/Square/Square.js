import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import Piece from '../Piece/Piece';
import Bishop from '../Bishop/Bishop';

const Square = ({squareColor, knightPosition, bishopPosition, squareX, squareY, setSquare, selectPiece, chessPiece}) => {



const color = squareColor ? 'white' : 'gray'

const displayPiece = () => {
   const [knightX, knightY] = knightPosition;
    const piece = (squareX === knightX && squareY === knightY) ?
    <Piece /> : null;
  return piece;
}

const displayBishop = () => {
  const [bishopX, bishopY] = bishopPosition;
  const bishop = (squareX === bishopX && squareY === bishopY) ? 
  <Bishop /> : null;
  return bishop;
}


  return (

    <div className = "Square">
      <div className = {`oneSquare ${color}`}>
        <div 
        className = "piece-container"
        onClick={ () => setSquare(squareX, squareY)}>
          {displayPiece()}
          {displayBishop()}
        </div>   

      </div>
    </div>
  );
};

export default Square;