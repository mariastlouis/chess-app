import React from 'react';
import Knight from './Knight.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

let renderedPiece;

describe('Knight', () =>{
  beforeEach(() => {
    renderedPiece = shallow(
      <Knight 
        mode = 'standard'
      />);
  });

  it('should render corrrectly', () => {
    expect(renderedPiece).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedPiece).toMatchSnapshot();
  });

  it('should render a knight image by default', () => {
    expect(renderedPiece.containsMatchingElement(
      <img src="knight.png" className="knight gamepiece" alt="knight" />))
      .toEqual(true);
  });

  it('should render a donkey if the mode if is on democrat mode', () => {
    const renderedDemPiece = shallow (
      <Knight mode = 'democrat' />);

    expect(renderedDemPiece.containsMatchingElement(
      <img src="demDonkey.png" className="knight gamepiece" alt="knight" />))
      .toEqual(true);
  });

  it('should render an elephant if the mode if is on republican mode', () => {
    const renderedRepPiece = shallow (
      <Knight mode = 'republican' />);

    expect(renderedRepPiece.containsMatchingElement(
      <img src="repElephant.png" className="knight gamepiece" alt="knight" />))
      .toEqual(true);
  });
});