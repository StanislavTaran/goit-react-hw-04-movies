import React from 'react';
import propTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ placeholder, type, value, onChange }) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  placeholder: null,
  type: 'text',
};

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
