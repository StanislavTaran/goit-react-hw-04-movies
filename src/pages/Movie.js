/* eslint-disable camelcase */
import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Movie from '../components/MovieItem/MovieItem';
import Button from '../components/Button/Button';
import * as filmsAPI from '../services/fetchFilmsAPI';

const getIdFromProps = props => props.match.params.movieId;

export default class MoviePage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    filmsAPI.fetchFilmsWithId(id).then(item => this.setState({ movie: item }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const searchQuery = location.state.from.search;
    if (searchQuery) {
      return history.push(`${location.state.from.pathname}${searchQuery}`);
    }
    return history.push(`${location.state.from.pathname}`);
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
      <div>
        <Button title="Back to movies" onClick={this.handleGoBack} />
        <Movie
          title={original_title}
          image={poster_path}
          score={vote_average}
          overview={overview}
          genres={genres}
          onGoBack={this.handleGoBack}
        />
      </div>
    );
  }
}

MoviePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
