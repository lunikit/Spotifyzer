import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = ({ isAuthenticated, userName, onLogout }) => (
  <div className="">
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-8 pt-1">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            { isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/Search">Search</Link>
            </li>
            )}
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-between align-items-center">
          <span className="text-muted">{ userName }</span>
        </div>
        <div className="col-2">
          { isAuthenticated && (
            <a className="btn btn-sm btn-outline-secondary btn-block" href="#" onClick={onLogout}>Logout</a>
          )}
          { !isAuthenticated && (
            <a className="btn btn-outline-secondary btn-block" href="http://localhost:5000/login">Login</a>
          )}
        </div>
      </div>
    </header>
  </div>
);

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default Header;
