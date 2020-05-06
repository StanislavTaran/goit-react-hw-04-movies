import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import defaultValues from '../../services/defaultPoster';
import styles from './MovieList.module.css';

const MovieList = ({ items, location }) => {
  return (
    <ul className={styles.filmList}>
      {items.map(item => {
        const imageUrl = item.poster_path
          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
          : defaultValues.poster;
        return (
          <li className={styles.filmItem} key={item.id}>
            <Link
              className={styles.link}
              to={{ pathname: `/movies/${item.id}`, state: { from: location } }}
            >
              <img src={imageUrl} alt={item.original_title} />
              <p className={styles.title} title={item.original_title}>
                {item.original_title}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(MovieList);
