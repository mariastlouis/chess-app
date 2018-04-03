import React from 'react';
import PropTypes from 'prop-types';
import knight from '../resources/knight.png';
import donkey from '../resources/demDonkey.png';
import elephant from '../resources/repElephant.png';

import './Knight.css';


const Knight = ({mode}) => {

  const selectMode = () => {
    let piece;

    if (mode === 'standard') {
      piece = knight;
    } else if (mode === 'democrat') {
      piece = donkey;
    } else {
      piece = elephant;
    }
    return piece;
  };


  return (
    <div className = "Piece">
      <img src = {`${selectMode()}`} className = 'knight gamepiece' alt = 'knight' />
    </div>
  );
};

export default Knight;

Knight.propTypes = {
  gameMode: PropTypes.string,
};
