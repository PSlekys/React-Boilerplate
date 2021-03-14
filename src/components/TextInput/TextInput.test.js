import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './TextInput';

it('TextInput renders correctly', () => {
  const tree = renderer.create(<TextInput name="name" placeholder="placehodler" />).toJSON();
  expect(tree).toMatchSnapshot();
});
