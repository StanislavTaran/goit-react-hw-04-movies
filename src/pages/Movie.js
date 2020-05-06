/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
    const {
      original_title,
      poster_path,
      vote_average,
      genres,
      overview,
    } = this.state.movie;

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

        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </article>
    );
  }
}

MoviePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
