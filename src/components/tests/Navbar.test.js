import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../_mocks_/Navbar';

test('Navbar matches snapshot', () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});
