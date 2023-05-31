import PropTypes from 'prop-types';

const Button = ({ label }) => <button type="button" className="cal-btn">{label}</button>;

Button.propTypes = { label: PropTypes.string.isRequired };

export default Button;
