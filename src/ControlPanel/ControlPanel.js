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
      return ''
    }
  }

  return (
    <div className = "ControlPanel">
      <h2>{selectedPieceMessage()} </h2>
      <h2> {message} </h2>
    </div>
  );
};

export default ControlPanel;