import React from 'react';
import PropTypes from 'prop-types';

// import './ControlPanel.css'




const ControlPanel = ({message, chessPiece}) => {

  // const selectedPiece = () => {
  //   return chessPiece 
  // }

  return (
    <div className = "ControlPanel">
     <h1> {chessPiece} </h1>
     <p> {message} </p>
    </div>
  );
};

export default ControlPanel;