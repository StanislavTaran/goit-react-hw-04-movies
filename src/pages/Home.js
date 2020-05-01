import React, { Component } from 'react';
import * as filmsAPI from '../services/fetchFilmsAPI';
import FilmList from '../components/FilmList/FilmList';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    filmsAPI.fetchTrendingFilms().then(data =>
      this.setState({
        films: data.results,
      }),
    );
  }

  render() {
    const { films } = this.state;

    return <FilmList items={films} />;
  }
}
