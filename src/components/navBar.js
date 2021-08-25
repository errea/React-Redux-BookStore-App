import React from 'react';
import {
  Link,
} from 'react-router-dom';

const NavBar = () => (
  <>
    <div className="title-navbar">
      <h1 className="title-h1">Bookstore CMS</h1>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIESS</Link>
          </li>
        </ul>
      </nav>
    </div>
    <span><i /></span>
  </>
);

export default NavBar;