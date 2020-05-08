import React from 'react';
import propTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import defaultValues from '../../services/defaultValues';
import styles from './MovieInfo.module.css';

const defaultText = 'no information available';

const MovieInfo = ({ title, image, score, overview, genres, match }) => {
  const posterURL = image
    ? `https://image.tmdb.org/t/p/w300${image}`
    : defaultValues.poster;

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
              return <span key={item.id}> {item.name} </span>;
            })}
        </p>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`${match.url}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`${match.url}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
    </article>
  );
};

MovieInfo.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
  genres: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }),
  ).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(MovieInfo);
