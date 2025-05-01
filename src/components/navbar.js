import React, { forwardRef, useImperativeHandle } from 'react';
import { useState } from 'react';

const Navbar = forwardRef((props, ref) => {

  const [page, setPage] = useState(1);

  useImperativeHandle(ref, () => ({
    getPage() {
      return page;
    }
  }));

  function setPageHome() {
    setPage(0);
    console.log(page);
  }

  function setPagePrices() {
    setPage(1);
    console.log(page);
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
                <button type="button" class="btn text-light" onClick={setPageHome}>Home</button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn text-light" onClick={setPagePrices}>Prices</button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn text-light">Trips</button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn text-light">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
})

export default Navbar;