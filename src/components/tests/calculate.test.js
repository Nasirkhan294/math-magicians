import calculate from '../logic/calculate';

describe('Tests for calculate function', () => {
  const initialValues = { total: '1', next: '2', operation: '+' };
  let result = {};

  test('Should return null on AC button click', () => {
    result = calculate(initialValues, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('Should update next when a number button is clicked and there is no operation', () => {
    result = calculate(result, '3');
    expect(result).toEqual({ total: null, next: '3' });
  });

  test('Should update total when an operation button is clicked', () => {
    result = calculate(result, '+');
    expect(result).toEqual({ total: '3', next: null, operation: '+' });
  });

  test('Should update next when a number button is clicked and operation is present', () => {
    result = calculate(result, '4');
    expect(result).toEqual({ total: '3', next: '4', operation: '+' });
  });

  test('Should update next when a number button is clicked again for a two digit number', () => {
    result = calculate(result, '5');
    expect(result).toEqual({ total: '3', next: '45', operation: '+' });
  });

  test('Should update total when a equal button is clicked for calculation', () => {
    result = calculate(result, '=');
    expect(result).toEqual({ total: '48', next: null, operation: null });
  });
});
