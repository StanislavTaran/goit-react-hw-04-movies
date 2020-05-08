import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Cast.module.css';
import defaultValues from '../../services/defaultValues';
import * as filmsAPI from '../../services/fetchFilmsAPI';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { movieId } = this.props.match.params;

    filmsAPI.fetchActors(movieId).then(data =>
      this.setState({
        cast: data.cast,
      }),
    );
  }

  render() {
    const { cast } = this.state;

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
      <p>No data yet</p>
    );
  }
}

Cast.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
