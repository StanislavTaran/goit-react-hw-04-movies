import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MoviesPage from './pages/Movies';
import MovieDetailsPage from './pages/Movie';
import HomePage from './pages/Home';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
