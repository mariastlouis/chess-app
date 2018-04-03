import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../resources/logo.png'
import './ControlPanel.css'



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
    this.props.mode(mode)

  }

  render () {
  return (
    <div className = "controlPanel">
      <div className = "logo-div sider-div">
        <img src = {logo} alt = "logo" className = "logo"/>
      </div>
      <div className = "mode-form sider-div">
        <h2> Select a game mode </h2>
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
        <hr />
      </div>
      <div className = "message-div sider-div">
        <h2>{this.selectedPieceMessage()} </h2>
        <h2> {this.props.message} </h2>
      </div>
    </div>
  );
  }
};

export default ControlPanel;