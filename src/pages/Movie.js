// import React, { Component } from 'react';
// import Movie from '../components/MovieItem/MovieItem';
// import * as filmsAPI from '../services/fetchFilmsAPI';

// const getIdFromProps = props => props.match.params.movieId;

// export default class MoviePage extends Component {
//   state = {
//     movie: {},
//   };

//   componentDidMount() {
//     const id = getIdFromProps(this.props);
//     filmsAPI.fetchFilmsWithId(id).then(item => this.setState({ movie: item }));
//   }

//   handleGoBack = () => {
//     const { history, location } = this.props;
//     history.push(
//       `${location.state.from.pathname}${location.state.from.search}`,
//     );
//   };

//   render() {
//     const {
//       original_title,
//       poster_path,
//       vote_average,
//       genres,
//       overview,
//     } = this.state.movie;

//     return (
//       <div>
//         <Movie
//           title={original_title}
//           image={poster_path}
//           score={vote_average}
//           overview={overview}
//           genres={genres}
//           onGoBack={this.handleGoBack}
//         />
//         <button type="button" onClick={this.handleGoBack}>
//           Back to articles
//         </button>
//       </div>
//     );
//   }
// }
