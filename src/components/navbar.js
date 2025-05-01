import React from 'react';

const Navbar = ({ onPageChange, currentPage }) => {
  // Use onPageChange to update the page when needed
  // For example:
  // <button onClick={() => onPageChange(1)}>Go to Page 1</button>
  // <button onClick={() => onPageChange(0)}>Go to Page 0</button>

  // You can also use currentPage to highlight the active page in your navbar

  function setPageHome() {
    onPageChange(0);
  }

  function setPagePrices() {
    onPageChange(1);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bold" href="/">
            Trips.com
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item active">
                <button type="button" className={`btn text-light ${currentPage === 0 ? 'active' : ''}`} onClick={setPageHome}>Home</button>
              </li>
              <li className="nav-item">
                <button type="button" className={`btn text-light ${currentPage === 1 ? 'active' : ''}`} onClick={setPagePrices}>Prices</button>
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
    </div>
  );
};

export default Navbar;