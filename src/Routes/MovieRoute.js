import React, { lazy, Suspense } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Loader from 'react-loader-spinner';
import { Route, Switch, withRouter } from 'react-router-dom';

const CastAsync = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const ReviewsAsync = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

const MovieRoute = ({ match }) => (
  <Suspense
    fallback={<Loader type="ThreeDots" color="#ccc" width={80} height={80} />}
  >
    <Switch>
      <Route path={`${match.path}/cast`} component={CastAsync} />
      <Route path={`${match.path}/reviews`} component={ReviewsAsync} />
    </Switch>
  </Suspense>
);

MovieRoute.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(MovieRoute);
