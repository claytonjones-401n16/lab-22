import React from 'react';

import { shallow, mount, render } from 'enzyme';

import Counter from '../components/Counter';

describe('component functions', () => {
  it('increments when the + button is clicked', () => {
    let component = shallow(<Counter />);
    let plus = component.find('.up');
    expect(component.state('count')).toEqual(0);
  });
});