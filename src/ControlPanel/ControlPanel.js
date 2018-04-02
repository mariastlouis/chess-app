import React from 'react';
import PropTypes from 'prop-types';

// import './ControlPanel.css'




const ControlPanel = ({message, chessPiece}) => {
  console.log(chessPiece)


  const selectedPieceMessage = () => {
    if (chessPiece === 'knight') {
      return 'Knight selected'
    } else if (chessPiece === 'bishop') {
      return 'Bishop selected'
    } else {
      return 'Select a piece'
    }
  }

  return (
    <div className = "ControlPanel">
      <h1>{selectedPieceMessage()} </h1>
      <h2> {message} </h2>
    </div>
  );
};

export default ControlPanel;