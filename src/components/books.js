import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './bookInfor';
import BookActions from './bookActions';
import BookCompletionStatus from './bookCompletionStatus';
import BookProgress from './bookProgress';

const Book = (
  {
    id, title, category,
  },
) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfo title={title} category={category} />
      <BookActions id={id} />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus />
      <BookProgress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
}).isRequired;

export default Book;
