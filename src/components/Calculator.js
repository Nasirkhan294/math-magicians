import { useState } from 'react';
import DigitsButtons from './logic/DigitsButtons';
import OperatorsButtons from './logic/OperatorsButtons';
import './Calculator.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit);
    }
  };

  const performCalculation = () => {
    const currentValue = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue(storedValue + currentValue);
    } else if (operator === '-') {
      setDisplayValue(storedValue - currentValue);
    } else if (operator === '*') {
      setDisplayValue(storedValue * currentValue);
    } else if (operator === '/') {
      setDisplayValue(storedValue / currentValue);
    }

    setStoredValue(null);
    setOperator(null);
  };

  const handleOperatorClick = (op) => {
    if (operator && storedValue !== null) {
      performCalculation();
    }

    setStoredValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    if (operator && storedValue !== null) {
      performCalculation();
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="cal-display">{displayValue}</div>
      <div className="buttons-wrapper">
        <DigitsButtons handleClearClick={handleClearClick} handleDigitClick={handleDigitClick} />
        <OperatorsButtons
          handleEqualClick={handleEqualClick}
          handleOperatorClick={handleOperatorClick}
        />
      </div>
    </div>
  );
}
