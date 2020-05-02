import React, { Component } from 'react';
import queryString from 'query-string';
import * as filmsAPI from '../services/fetchFilmsAPI';
import FilmList from '../components/FilmList/FilmList';

const getSearchQueryfromLocation = location =>
  queryString.parse(location.search).query;

export default class Movies extends Component {
  state = {
    searchQuery: '',
    films: [],
  };

  componentDidMount() {
    const { location } = this.props;

    const qsValue = getSearchQueryfromLocation(location);

    if (qsValue) {
      filmsAPI.fetchQueryFilms(qsValue).then(data => {
        this.setState({
          films: data.results,
        });
      });
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
    const { searchQuery, films } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleChangeQuery}
            placeholder="Search movies"
          />
        </form>

        <FilmList items={films} />
      </>
    );
  }
}