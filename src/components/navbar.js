import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand font-weight-bold" to="/">
          Trips.com
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link to="/" className={`btn text-light ${currentPage === 0 ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/prices" className={`btn text-light ${currentPage === 1 ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                Prices
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn text-light">Trips</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn text-light">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;