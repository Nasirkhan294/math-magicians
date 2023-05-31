import PropTypes from 'prop-types';
import Button from '../Button';

export default function OperatorsButtons({ handleOperatorClick, handleEqualClick }) {
  return (
    <div className="cal-operators">
      <Button label="/" handleClick={() => handleOperatorClick('/')} />
      <Button label="*" handleClick={() => handleOperatorClick('*')} />
      <Button label="-" handleClick={() => handleOperatorClick('-')} />
      <Button label="+" handleClick={() => handleOperatorClick('+')} />
      <Button label="=" handleClick={handleEqualClick} />
    </div>
  );
}

OperatorsButtons.propTypes = {
  handleOperatorClick: PropTypes.func.isRequired,
  handleEqualClick: PropTypes.func.isRequired,
};
