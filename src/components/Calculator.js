import { useState } from 'react';
import DigitsButtons from './DigitsButtons';
import OperatorsButtons from './OperatorsButtons';
import './Calculator.css';
import calculate from './logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(state, buttonName);
    setState(newData);
  };

  return (
    <div className="calculator">
      <div className="cal-display">{state.next || state.total || '0'}</div>
      <div className="buttons-wrapper">
        <DigitsButtons handleButtonClick={handleButtonClick} />
        <OperatorsButtons handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
