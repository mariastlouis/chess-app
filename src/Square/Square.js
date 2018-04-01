import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'
import Piece from '../Piece/Piece'

const Square = ({squareColor, knightPosition, squareX, squareY, setSquare}) => {

const color = squareColor ? 'white' : 'gray'



const displayPiece = () => {
   const [knightX, knightY] = knightPosition;
    const piece = (squareX === knightX && squareY === knightY) ?
    <Piece /> : null;
  return piece;
}

  return (

    <div className = "Square">
      <div className = {`oneSquare ${color}`}>
        <div 
        className = "piece-container"
        onClick={ () => setSquare(squareX, squareY)}>
          {displayPiece()}
        </div>   

      </div>
    </div>
  );
};

export default Square;