import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const FilmList = ({ items, location }) => {
  return items.map(item => (
    <li>
      <Link to={{ pathname: `/movies/${item.id}`, state: { from: location } }}>
        {item.original_title}
      </Link>
    </li>
  ));
};

FilmList.propTypes = {
  items: propTypes.arrayOf(propTypes.string).isRequired,
};

export default withRouter(FilmList);
