import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/navBar';
import Book from './components/books';
import BookNew from './components/bookNew';
import Categories from './components/categories';

const booksInfo = [
  {
    id: 1,
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: '64%',
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
    percentage: '8%',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    category: 'Economy',
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: '0%',
    chapter: 'Introduction',
  },
];

const App = () => {
  const bookList = booksInfo.map((bookInfo) => <Book key={bookInfo.id} info={bookInfo} />);
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            { bookList }
            <BookNew />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
