/* eslint-disable camelcase */
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Movie from '../components/MovieInfo/MovieInfo';
import Button from '../components/Button/Button';
import MovieRoute from '../Routes/MovieRoute';
import * as filmsAPI from '../services/fetchFilmsAPI';

const getIdFromProps = props => props.match.params.movieId;

export default class MoviePage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    filmsAPI
      .fetchFilmsWithId(id)
      .then(items => this.setState({ movie: items }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.push(
        `${location.state.from.pathname}${location.state.from.search}`,
      );
    } else {
      history.push(`/`);
    }
  };

  render() {
    const { movie } = this.state;

    return (
      <article>
        <Button title="Back to movies" onClick={this.handleGoBack} />
        <Movie
          title={movie.original_title}
          image={movie.poster_path}
          score={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
          onGoBack={this.handleGoBack}
        />
        <MovieRoute />
      </article>
    );
  }
}

MoviePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
