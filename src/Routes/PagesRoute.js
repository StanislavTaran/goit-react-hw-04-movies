import React, { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

const HomePageAsync = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "home-page" */),
);
const MoviesPageAsync = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPageAsync = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */
  ),
);

const PagesRoute = () => (
  <Suspense
    fallback={<Loader type="ThreeDots" color="#ccc" width={80} height={80} />}
  >
    <Switch>
      <Route path="/" exact component={HomePageAsync} />
      <Route path="/movies/:movieId" component={MovieDetailsPageAsync} />
      <Route path="/movies/:movieId/cast" component={MovieDetailsPageAsync} />
      <Route
        path="/movies/:movieId/reviews"
        component={MovieDetailsPageAsync}
      />
      <Route path="/movies" component={MoviesPageAsync} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default withRouter(PagesRoute);
