import React from 'react';
import PropTypes from 'prop-types';
import knight from '../resources/knight.png';
import bishop from '../resources/bishop.png';
import './Piece.css'


const Piece = () => {
  return (
    <div className = "Piece">
      <img src = {knight} className = 'knight gamepiece' alt = 'knight' />
    </div>
  );
};

export default Piece;