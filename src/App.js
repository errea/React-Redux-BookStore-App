import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/navBar';
import BookStore from './components/bookStore';
import BookNew from './components/bookNew';
import Categories from './components/categories';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <BookStore />
          <BookNew />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
export default App;
