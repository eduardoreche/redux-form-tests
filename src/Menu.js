import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Acme Inc.</span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/stock/withdraw" className="nav-link">Withdraw</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};