import React from 'react';
import propTypes from 'prop-types';
import styles from './MovieItem.module.css';

const Movie = ({ title, image, score, overview }) => (
  <article className={styles.article}>
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={title}
      />
    </div>
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>User score : {score}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      {/* <h3>Genres</h3>
        <p>
          {genres.map(item => (
            <span> {item.name} </span>
          ))}
        </p> */}
    </div>
  </article>
);

Movie.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  score: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  // genres: propTypes.arrayOf(
  //   propTypes.shape({
  //     name: propTypes.string.isRequired,
  //   }),
  // ).isRequired,
  // onGoBack: propTypes.func.isRequired,
};

export default Movie;
