import React, { Component } from 'react';
import * as filmsAPI from '../services/fetchFilmsAPI';
import MovieList from '../components/MovieList/MovieList';

export default class HomePage extends Component {
  state = {
    films: [],
    errorMessage: null,
  };

  componentDidMount() {
    filmsAPI
      .fetchTrendingFilms()
      .then(data =>
        this.setState({
          films: data.results,
        }),
      )
      .catch(error =>
        this.setState({
          errorMessage: error.response.data.status_message,
        }),
      );
  }

  render() {
    const { films, errorMessage } = this.state;

    return films.length > 0 ? (
      <MovieList items={films} />
    ) : (
      <h2>{errorMessage}</h2>
    );
  }
}
