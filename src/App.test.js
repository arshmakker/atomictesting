import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';

test('Renders Header component', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
