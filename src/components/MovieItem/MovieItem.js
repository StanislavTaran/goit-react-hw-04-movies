import React from 'react';
import propTypes from 'prop-types';
import defaultPosterURL from '../../services/defaultPoster';
import styles from './MovieItem.module.css';

const defaultText = 'no information available';

const Movie = ({ title, image, score, overview, genres }) => {
  const posterURL = image
    ? `https://image.tmdb.org/t/p/w300${image}`
    : defaultPosterURL;
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <img className={styles.image} src={posterURL} alt={title} />
      </div>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>User score : {score || defaultText}</p>
        <h3>Overview</h3>
        <p>{overview || defaultText}</p>
        <h3>Genres</h3>
        <p>
          {genres &&
            genres.map(item => {
              return <span> {item.name} </span>;
            })}
        </p>
      </div>
    </article>
  );
};

Movie.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
  genres: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Movie;
