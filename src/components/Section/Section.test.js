import React from 'react';
import renderer from 'react-test-renderer';

import Section from './Section';

it('Section renders correctly', () => {
  const tree = renderer.create(<Section>Content</Section>).toJSON();
  expect(tree).toMatchSnapshot();
});
