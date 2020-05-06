import React from 'react';
import propTypes from 'prop-types';

const Reviews = ({ items }) => {
  return items.length > 0 ? (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>
            <b>{item.author}</b>
          </p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews yet</p>
  );
};

Reviews.defaultProps = {
  items: [],
};

Reviews.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      author: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
