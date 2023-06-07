import operate from '../logic/operate';

describe('Test for operation', () => {
  it('addition', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });
  it('subtraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });
  it('multiplication', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
  });
  it('division', () => {
    const result = operate('5', '2', '÷');
    expect(result).toBe('2.5');
  });
  it('division by zero', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  it('modulus', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });
  it('modulus by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
  it('invalid operation', () => {
    expect(() => operate('5', '2', '@')).toThrow();
  });
});
