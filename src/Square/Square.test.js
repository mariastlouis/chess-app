import React from 'react';
import Square from './Square.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const mockSetSquareFunction = jest.fn();
const mockSelectPieceFunction = jest.fn();

let renderedSquare;

describe('Square', () => {
  beforeEach(() => {
    renderedSquare = shallow(
      <Square 
        squareColor = {true}
        knightPosition = {[1,7]}
        bishopPosition = {[2,7]}
        squareX = {3}
        squareY = {8}
        setSquare = {mockSetSquareFunction}
        selectPiece = {mockSelectPieceFunction}
        chessPiece = {'bishop'}
        gameMode = {'democrat'} />);
  })

  it('should render corrrectly', () => {
    expect(renderedSquare).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedSquare).toMatchSnapshot();
  });

it('should call the setSquare function if the square is clicked', () => {
    expect(mockSetSquareFunction.mock.calls.length).toEqual(0);
    renderedSquare.find('.piece-container').simulate('click');
    expect(mockSetSquareFunction.mock.calls.length).toEqual(1);
  });

it('should have a default class of white', () => {
  expect(renderedSquare.find('.white').length).toEqual(1);
});

});