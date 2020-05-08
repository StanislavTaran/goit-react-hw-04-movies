import React, { Component } from 'react';
import styles from './Reviews.module.css';
import * as filmsAPI from '../../services/fetchFilmsAPI';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    filmsAPI.fetchReviews(id).then(data =>
      this.setState({
        reviews: data.results,
      }),
    );
  }

  render() {
    const { reviews } = this.state;

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
      <p>No reviews yet</p>
    );
  }
}
