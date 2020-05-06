import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MoviesPage from './pages/Movies';
import MoviePage from './pages/Movie';
import HomePage from './pages/Home';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MoviePage} />
          <Route path="/movies/:movieId/cast" component={MoviePage} />
          <Route path="/movies/:movieId/reviews" component={MoviePage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
