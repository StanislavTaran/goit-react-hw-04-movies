import React, { Component } from 'react';
// import propTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Reviews.module.css';
import * as filmsAPI from '../../services/fetchFilmsAPI';

export default class Reviews extends Component {
  state = {
    reviews: [],
    errorMessage: null,
  };

  componentDidMount() {
    const { match } = this.props;

    filmsAPI
      .fetchReviews(match.params.movieId)
      .then(data =>
        this.setState({
          reviews: data.results,
        }),
      )
      .catch(error =>
        this.setState({
          errorMessage: error.response.data.status_message,
        }),
      );
  }

  render() {
    const { reviews, errorMessage } = this.state;

    return reviews.length > 0 ? (
      <ul className={styles.reviewsList}>
        {reviews.map(item => (
          <li key={item.id}>
            <hr />
            <p>
              <b className={styles.author}>{item.author}</b>
            </p>
            <p className={styles.content}>{item.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>{errorMessage || 'No reviews yet'}</p>
    );
  }
}

Reviews.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
