import { render } from '@testing-library/react';
import Calculator from './Calculator';

test('Calcultor component matches snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
