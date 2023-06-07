import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

test('Quote matches snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
