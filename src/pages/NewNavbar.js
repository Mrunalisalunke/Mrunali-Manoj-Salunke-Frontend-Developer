import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NewNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow sticky-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
      <img
                className="logo"
                src="images/logo.png"
                alt="logo"
                style={{ width: '200px', height: 'auto', border: '2px solid black', borderRadius: '8px' }}
            />
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Nav.Link
           href="/" className="nav-item nav-link">Home</Nav.Link>
          <Nav.Link
           href="/about" className="nav-item nav-link">About</Nav.Link>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/form" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Search Capsules<i className="fa fa-arrow-right ms-3"></i></Link>
      </div>
    </nav>
  );
};

export default NewNavbar;
