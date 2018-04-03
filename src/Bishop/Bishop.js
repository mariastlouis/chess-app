import React from 'react';
import PropTypes from 'prop-types';
import bishop from '../resources/bishop.png';
import './Bishop.css';
import repCapitol from '../resources/repCapitol.png';
import demCapitol from '../resources/demCapitol.png';


const Bishop = ({mode}) => {

  const selectMode = () => {
    let piece;

    if (mode === 'standard') {
      piece = bishop;
    } else if (mode === 'democrat') {
      piece = demCapitol;
    } else {
      piece = repCapitol;
    }
    return piece;
  };



  return (
    <div className = "Bishop">
      <img src = {`${selectMode()}`} className = 'bishop gamepiece' alt = 'bishop' />
    </div>
  );
};

export default Bishop;