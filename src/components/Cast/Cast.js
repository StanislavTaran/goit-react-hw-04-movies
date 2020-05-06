import React, { Component } from 'react';
import styles from './Cast.module.css';
import defaultValues from '../../services/defaultPoster';
import * as filmsAPI from '../../services/fetchFilmsAPI';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    filmsAPI.fetchActors(id).then(data =>
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
