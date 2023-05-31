import PropTypes from 'prop-types';
import Button from './Button';

const DigitsButtons = ({ handleButtonClick }) => (
  <div className="cal-digits">
    <Button label="AC" handleClick={handleButtonClick} />
    <Button label="+/-" handleClick={handleButtonClick} />
    <Button label="%" handleClick={handleButtonClick} />
    <Button label="9" handleClick={handleButtonClick} />
    <Button label="8" handleClick={handleButtonClick} />
    <Button label="7" handleClick={handleButtonClick} />
    <Button label="6" handleClick={handleButtonClick} />
    <Button label="5" handleClick={handleButtonClick} />
    <Button label="4" handleClick={handleButtonClick} />
    <Button label="3" handleClick={handleButtonClick} />
    <Button label="2" handleClick={handleButtonClick} />
    <Button label="1" handleClick={handleButtonClick} />
    <Button label="0" handleClick={handleButtonClick} />
    <Button label="." handleClick={handleButtonClick} />
  </div>
);

DigitsButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default DigitsButtons;
