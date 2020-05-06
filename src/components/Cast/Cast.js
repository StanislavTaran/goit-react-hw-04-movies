import React from 'react';
import propTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = ({ items }) => {
  return items.length > 0 ? (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
            alt={item.name}
            className={styles.avatar}
          />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  ) : (
    'No data yet'
  );
};

Cast.defaultProps = {
  items: [],
};

Cast.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      profile_path: propTypes.string.isRequired,
    }),
  ),
};

export default Cast;
