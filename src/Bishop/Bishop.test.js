import React from 'react';
import Bishop from './Bishop.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

let renderedPiece;

describe('Bishop', () =>{
  beforeEach(() => {
    renderedPiece = shallow(
      <Bishop 
        mode = 'standard'
      />);
  });

  it('should render corrrectly', () => {
    expect(renderedPiece).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedPiece).toMatchSnapshot();
  });

  it('should render a bishop image by default', () => {
    expect(renderedPiece.containsMatchingElement(
      <img src="bishop.png" className="bishop gamepiece" alt="bishop" />))
      .toEqual(true);
  });

  it('should render a blue capitol building if the mode if is on democrat mode', () => {
    const renderedDemPiece = shallow (
      <Bishop mode = 'democrat' />);

    expect(renderedDemPiece.containsMatchingElement(
      <img src="demCapitol.png" className="bishop gamepiece" alt="bishop" />))
      .toEqual(true);
  });

  it('should render red capitol building if the mode if is on republican mode', () => {
    const renderedRepPiece = shallow (
      <Bishop mode = 'republican' />);

    expect(renderedRepPiece.containsMatchingElement(
      <img src="repCapitol.png" className="bishop gamepiece" alt="bishop" />))
      .toEqual(true);
  });
});