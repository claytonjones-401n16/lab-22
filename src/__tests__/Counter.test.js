import React from 'react';

import { shallow, mount, render } from 'enzyme';

import Counter from '../components/Counter';

describe('component plus/minus functions correctly', () => {
  it('increments state and updates html when the + button is clicked', () => {
    let component = shallow(<Counter />);
    let plus = component.find('.up');
    expect(component.state('count')).toEqual(0);
    expect(component.find('.count').text()).toBe('0');
    plus.simulate('click');
    expect(component.state('count')).toEqual(1);
    expect(component.find('.count').text()).toBe('1');

  });

  it('decrements state and updates html when the - button is clicked', () => {
    let component = shallow(<Counter />);
    let minus = component.find('.down');
    expect(component.state('count')).toEqual(0);
    expect(component.find('.count').text()).toBe('0');
    minus.simulate('click');
    expect(component.state('count')).toEqual(-1);
    expect(component.find('.count').text()).toBe('-1');


  });
});

