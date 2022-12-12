import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const userName = localStorage.getItem('userName');
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Main</Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/profile">{userName}</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
