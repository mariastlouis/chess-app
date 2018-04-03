import React from 'react';
import Board from './Board.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const mockSetSquareFunction = jest.fn();
const mockSelectPieceFunction = jest.fn();
const mockCheckMoveValid = jest.fn();

let renderedBoard;

describe('Square', () => {
  beforeEach(() => {
    renderedBoard = shallow(
      <Board 
        knightPosition = {[1,7]}
        bishopPosition = {[2,7]}
        setSquare = {mockSetSquareFunction}
        chessPiece = {'bishop'}
        selectPiece = {mockSelectPieceFunction}
        checkMoveValid = {mockCheckMoveValid}
        gameMode = {'democrat'} />);
  })

  it('should render corrrectly', () => {
    expect(renderedBoard).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedBoard).toMatchSnapshot();
  });

  it('should have 64 squares', () => {
    expect(renderedBoard.find('.square-container').length).toEqual(64);
  })


});