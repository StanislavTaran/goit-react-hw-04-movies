/* eslint-disable camelcase */
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Movie from '../components/MovieItem/MovieItem';
import Button from '../components/Button/Button';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';
import * as filmsAPI from '../services/fetchFilmsAPI';

const getIdFromProps = props => props.match.params.movieId;

export default class MoviePage extends Component {
  state = {
    movie: {},
    isVisibleActors: false,
    isVisibleReviews: false,
    reviews: [],
    cast: [],
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    filmsAPI
      .fetchFilmsWithId(id)
      .then(items => this.setState({ movie: items }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const searchQuery = location.state.from.search;

    if (searchQuery) {
      history.push(`${location.state.from.pathname}${searchQuery}`);
    } else if (location.state) {
      history.push(`${location.state.from.pathname}`); // state ???
    }
  };

  handleOpenReviews = () => {
    const { movie, isVisibleReviews } = this.state;
    const { history, location } = this.props;

    if (isVisibleReviews) {
      return this.setState({
        isVisibleReviews: false,
      });
    }

    filmsAPI.fetchReviews(movie.id).then(
      data =>
        this.setState({
          isVisibleReviews: true,
          reviews: data.results,
        }),
      history.push(`${location.pathname}/reviews`),
    );
  };

  handleOpenCast = () => {
    const { movie, isVisibleActors } = this.state;
    const { history, location } = this.props;

    if (isVisibleActors) {
      return this.setState({
        isVisibleActors: false,
      });
    }

    filmsAPI.fetchActors(movie.id).then(
      data =>
        this.setState({
          isVisibleActors: true,
          cast: data.cast,
        }),
      history.push(`${location.pathname}/cast`),
    );
  };

  render() {
    const {
      original_title,
      poster_path,
      vote_average,
      genres,
      overview,
    } = this.state.movie;

    const { isVisibleActors, isVisibleReviews, reviews, cast } = this.state;
    return (
      <article>
        <Button title="Back to movies" onClick={this.handleGoBack} />
        <Movie
          title={original_title}
          image={poster_path}
          score={vote_average}
          overview={overview}
          genres={genres}
          onGoBack={this.handleGoBack}
        />
        <button type="button" onClick={this.handleOpenReviews}>
          {isVisibleReviews ? ` Hide reviews` : `Show reviews`}
        </button>
        <button type="button" onClick={this.handleOpenCast}>
          {isVisibleActors ? ` Hide cast` : `Show cast`}
        </button>
        {isVisibleReviews && <Reviews items={reviews} />}
        {isVisibleActors && <Cast items={cast} />}
      </article>
    );
  }
}

MoviePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
