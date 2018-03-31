import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'
import Piece from '../Piece/Piece'

const Square = () => {

let color = "white"

  return (
    <div className = "Square">
      <div className = {`oneSquare ${color}`}>
        <Piece />
      </div>
    </div>
  );
};

export default Square;