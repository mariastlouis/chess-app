import React from 'react';
import PropTypes from 'prop-types';
import './Board.css'
import Square from '../Square/Square'


const Board = () => {

  return (
    <div className = "board">
      <Square />
    </div>
  );
};

export default Board;