import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';

test('Calculator matches snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
