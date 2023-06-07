import { render } from '@testing-library/react';
import Quote from './Quote';

test('Quote component matches snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
