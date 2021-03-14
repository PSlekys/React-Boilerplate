import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

it('Button renders correctly', () => {
  const tree = renderer.create(<Button handleClick={() => null}>Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
