import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
  onClick: () => {},
};

export default Button;
