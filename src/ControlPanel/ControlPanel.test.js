import React from 'react';
import ControlPanel from './ControlPanel.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const mockSetModeFunction = jest.fn();

let renderedControlPanel;

describe('ControlPanel', () => {
  beforeEach(() => {
    renderedControlPanel = shallow(
      <ControlPanel
        message = 'Select a piece to move'
        chessPiece = 'bishop'
        mode = {mockSetModeFunction} />);
  });

  it('should render correctly', () => {
    expect(renderedControlPanel).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedControlPanel).toMatchSnapshot();
  });


});