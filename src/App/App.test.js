import React from 'react';
import App from './App.js';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

let renderedApp;

describe('App', () => {
  beforeEach(() => {
    renderedApp = shallow(
      <App />)
  });
  
  it('should render correctly', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(renderedApp).toMatchSnapshot();
  });


});