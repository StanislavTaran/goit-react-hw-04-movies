import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import defaultPosterURL from '../../services/defaultPoster';
import styles from './FilmList.module.css';

const FilmList = ({ items, location }) => {
  return (
    <ul className={styles.filmList}>
      {items.map(item => {
        const imageUrl = item.poster_path
          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
          : defaultPosterURL;
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

FilmList.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  location: propTypes.arrayOf(propTypes.object).isRequired,
};

export default withRouter(FilmList);
