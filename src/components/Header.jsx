import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <NavLink className="li" to="/">Home</NavLink>
        <NavLink className="li" to="/about">About</NavLink>
        <NavLink className="li" to="/news">News</NavLink>
      </ul>




      {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a> */}

      {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link> */}
    </div>
  );
};

export default Header;