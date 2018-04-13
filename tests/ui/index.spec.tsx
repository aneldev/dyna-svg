import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaSvg} from '../../src';

const svgIcon: string = require('./assets/svg-file-format-variant.svg');


describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaSvg src={svgIcon} style={{width: "20px"}}/>
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
