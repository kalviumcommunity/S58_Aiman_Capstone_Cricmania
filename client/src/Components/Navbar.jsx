import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Welcome to Cricmania</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* Add logic to conditionally show Logout when user is logged in */}
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
