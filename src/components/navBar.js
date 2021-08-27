import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div className="header-bar">
    <div className="container">
      <div className="title-navbar">
        <h1 className="title-h1">Bookstore CMS</h1>
        <nav className="nav-links">
          <ul className="nav-list">
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="avatar">
        <span className="avatar-circle">
          <FontAwesomeIcon icon={faUserAlt} size="lg" color="#0290ff" />
        </span>
      </div>
    </div>
  </div>
);

export default NavBar;
