import Button from './Button';
import Calculate from './logic/Calculate';
import Operate from './logic/Operate';
import './Calculator.css';

export default function Calculator() {
  return (
    <>
      <Calculate />
      <Operate />
      <div className="calculator">
        <div className="cal-display">0</div>
        <div className="buttons-wrapper">
          <div className="cal-digits">
            <Button label="AC" />
            <Button label="+/-" />
            <Button label="%" />
            <Button label="9" />
            <Button label="8" />
            <Button label="7" />
            <Button label="6" />
            <Button label="5" />
            <Button label="4" />
            <Button label="3" />
            <Button label="2" />
            <Button label="1" />
            <Button label="0" />
            <Button label="." />
          </div>
          <div className="cal-operators">
            <Button label="/" />
            <Button label="*" />
            <Button label="-" />
            <Button label="+" />
            <Button label="=" />
          </div>
        </div>
      </div>
    </>
  );
}
