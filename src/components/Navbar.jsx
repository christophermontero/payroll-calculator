import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo" style={{ marginLeft: '2rem' }}>
          Calculator
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              className="btn red waves-effect waves-light"
              style={{ marginRight: '2rem' }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
