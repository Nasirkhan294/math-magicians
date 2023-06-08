import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

test('Home matches snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
