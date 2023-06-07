import { render } from '@testing-library/react';
import Calculator from './Calculator';

test('Navbar matches snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
