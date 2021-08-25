import React from 'react';
import PropTypes from 'prop-types';

const BookInfor = ({ category, name, author }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-name">{name}</p>
    <p className="book-author">{author}</p>
  </div>
);

BookInfor.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfor;
