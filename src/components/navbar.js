import { Link } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ padding: '0.5rem 1rem' }}>
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
              <Link to="/questions" className={`btn text-light ${currentPage === 2 ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/prices" className={`btn text-light ${currentPage === 1 ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                Prices
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;