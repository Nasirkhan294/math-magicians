import PropTypes from 'prop-types';
import Button from '../Button';

export default function DigitsButtons({ handleClearClick, handleDigitClick }) {
  return (
    <div className="cal-digits">
      <Button label="AC" handleClick={handleClearClick} />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="9" handleClick={() => handleDigitClick('9')} />
      <Button label="8" handleClick={() => handleDigitClick('8')} />
      <Button label="7" handleClick={() => handleDigitClick('7')} />
      <Button label="6" handleClick={() => handleDigitClick('6')} />
      <Button label="5" handleClick={() => handleDigitClick('5')} />
      <Button label="4" handleClick={() => handleDigitClick('4')} />
      <Button label="3" handleClick={() => handleDigitClick('3')} />
      <Button label="2" handleClick={() => handleDigitClick('2')} />
      <Button label="1" handleClick={() => handleDigitClick('1')} />
      <Button label="0" handleClick={() => handleDigitClick('0')} />
      <Button label="." />
    </div>
  );
}

DigitsButtons.propTypes = {
  handleClearClick: PropTypes.func.isRequired,
  handleDigitClick: PropTypes.func.isRequired,
};
