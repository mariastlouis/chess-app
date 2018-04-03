import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './ControlPanel.css'



class ControlPanel extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: 'standard'
    }

  }



  selectedPieceMessage() {
    if (this.props.chessPiece === 'knight') {
      return 'Knight selected'
    } else if (this.props.chessPiece === 'bishop') {
      return 'Bishop selected'
    } else {
      return ''
    }
  }

  handleOptionChange = event => {
    let mode = event.target.value

    this.setState({selectedOption: mode})
    console.log(this.state.selectedOption)
    // console.log(this.state.selectedOption)
    // this.setState({selectedOption: event.target.value})

  }

  render () {
  return (
    <div className = "ControlPanel">
      <h2>{this.selectedPieceMessage()} </h2>
      <h2> {this.props.message} </h2>
      <div className = "mode-form">
        <form>
          <div className="radio">
          <label>
            <input type="radio" value="standard"
             checked={this.state.selectedOption === 'standard'}
              onChange= {this.handleOptionChange}/>
            Standard Chess
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="democrat"
            checked={this.state.selectedOption === 'democrat'}
            onChange= {this.handleOptionChange}/>
            Democrat
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="republican"
            checked={this.state.selectedOption === 'republican'}
            onChange= {this.handleOptionChange}/>
            Republican
          </label>
        </div>
        </form>
      </div>
    </div>
  );
  }
};

export default ControlPanel;