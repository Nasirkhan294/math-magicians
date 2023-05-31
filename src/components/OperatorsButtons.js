import PropTypes from 'prop-types';
import Button from './Button';

const OperatorsButtons = ({ handleButtonClick }) => (
  <div className="cal-operators">
    <Button label="÷" handleClick={handleButtonClick} />
    <Button label="x" handleClick={handleButtonClick} />
    <Button label="-" handleClick={handleButtonClick} />
    <Button label="+" handleClick={handleButtonClick} />
    <Button label="=" handleClick={handleButtonClick} />
  </div>
);

OperatorsButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default OperatorsButtons;
