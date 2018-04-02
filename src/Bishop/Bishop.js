import React from 'react';
import PropTypes from 'prop-types';
import bishop from '../resources/bishop.png';
// import './Bishop.css'


const Bishop = () => {
  return (
    <div className = "Bishop">
      <img src = {bishop} className = 'bishop gamepiece' alt = 'bishop' />
    </div>
  );
};

export default Bishop;