import React from 'react';

import renderer from 'react-test-renderer';

import App from '../App';

describe('The app looks as expected', () => {
  it('matches the snapshot', () => {
    let html = renderer.create(<App />).toJSON();
    expect(html).toMatchSnapshot();
  });
});