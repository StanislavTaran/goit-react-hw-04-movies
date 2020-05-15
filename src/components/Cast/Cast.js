import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Cast.module.css';
import defaultValues from '../../services/defaultValues';
import * as filmsAPI from '../../services/fetchFilmsAPI';

export default class Cast extends Component {
  state = {
    cast: [],
    errorMessage: null,
  };

  componentDidMount() {
    const { match } = this.props;

    filmsAPI
      .fetchActors(match.params.movieId)
      .then(data =>
        this.setState({
          cast: data.cast,
        }),
      )
      .catch(error =>
        this.setState({
          errorMessage: error.response.data.status_message,
        }),
      );
  }

  render() {
    const { cast, errorMessage } = this.state;

    return cast.length > 0 ? (
      <div>
        <ul className={styles.castList}>
          {cast.map(item => (
            <li key={item.id} className={styles.castItem} title={item.name}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                    : defaultValues.avatar
                }
                alt={item.name}
                className={styles.avatar}
              />
              <p className={styles.name}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>{errorMessage || 'No data yet...('}</p>
    );
  }
}

Cast.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
