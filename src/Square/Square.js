import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'
import Piece from '../Piece/Piece'

const Square = ({squareColor, knightPosition, squareX, squareY}) => {

const color = squareColor ? 'white' : 'black'

const displayPiece = () => {
   const [knightX, knightY] = knightPosition;
   console.log('knightX', knightX)
   console.log('squareX', squareX)
   console.log('knightY', knightY)
   console.log('squareY', squareY)
    const piece = (squareX === knightX && squareY === knightY) ?
    <Piece /> : null;
  return piece;
}

  return (

    <div className = "Square">
      <div className = {`oneSquare ${color}`}>
        <div className = "piece-container">
          {displayPiece()}
        </div>   

      </div>
    </div>
  );
};

export default Square;