import React, { Component } from 'react';
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
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <hr />
            <p>
              <b>{item.author}</b>
            </p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No reviews yet</p>
    );
  }
}
