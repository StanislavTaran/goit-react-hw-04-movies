/* eslint-disable camelcase */
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Movie from '../components/MovieInfo/MovieInfo';
import Button from '../components/Button/Button';
import * as filmsAPI from '../services/fetchFilmsAPI';

const getIdFromProps = props => props.match.params.movieId;

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

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
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#ccc" width={80} height={80} />
          }
        >
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </Suspense>
      </article>
    );
  }
}

MoviePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
