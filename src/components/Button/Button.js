import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Button;
