import { useState } from 'react';
import DigitsButtons from './DigitsButtons';
import OperatorsButtons from './OperatorsButtons';
import './Calculator.css';
import Calculate from './logic/calculate';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = Calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    // Update the display value based on the calculator data
    let newDisplayValue = '0';
    if (newData.next) {
      newDisplayValue = newData.next;
    } else if (newData.total) {
      newDisplayValue = newData.total;
    }
    setDisplayValue(newDisplayValue);
  };

  return (
    <div className="calculator">
      <div className="cal-display">{displayValue}</div>
      <div className="buttons-wrapper">
        <DigitsButtons handleButtonClick={handleButtonClick} />
        <OperatorsButtons handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
