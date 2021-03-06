import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import * as filmsAPI from '../services/fetchFilmsAPI';
import FilmList from '../components/MovieList/MovieList';
import Input from '../components/Input/Input';

const getSearchQueryfromLocation = location =>
  queryString.parse(location.search).query;

export default class Movies extends Component {
  state = {
    searchQuery: '',
    films: [],
    errorMessage: null,
  };

  componentDidMount() {
    const { location } = this.props;

    const qsValue = getSearchQueryfromLocation(location);

    if (qsValue) {
      filmsAPI
        .fetchQueryFilms(qsValue)
        .then(data => {
          this.setState({
            films: data.results,
          });
        })
        .catch(error =>
          this.setState({
            errorMessage: error.response.data.status_message,
          }),
        );
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    filmsAPI.fetchQueryFilms(searchQuery).then(data =>
      this.setState({
        films: data.results,
      }),
    );

    const { history } = this.props;
    history.push(`?query=${searchQuery}`);
  };

  handleChangeQuery = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const { searchQuery, films, errorMessage } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={searchQuery}
            onChange={this.handleChangeQuery}
            placeholder="Search movies"
          />
        </form>

        {films.length > 0 ? (
          <FilmList items={films} />
        ) : (
          <h2>{errorMessage || 'Movies not found, try something else'}</h2>
        )}
      </>
    );
  }
}

Movies.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
