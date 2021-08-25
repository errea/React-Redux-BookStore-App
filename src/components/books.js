import React from 'react';
import PropTypes from 'prop-types';

import BookInfor from './bookInfor';
import BookActions from './bookActions';
import BookCompletionStatus from './bookCompletionStatus';
import BookProgress from './bookProgress';

const Book = ({ info }) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfor category={info.category} name={info.name} author={info.author} />
      <BookActions />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus percentage={info.percentage} />
      <BookProgress chapter={info.chapter} />
    </div>
  </div>
);

Book.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    percentage: PropTypes.string,
    chapter: PropTypes.string,
  }).isRequired,
};

export default Book;
