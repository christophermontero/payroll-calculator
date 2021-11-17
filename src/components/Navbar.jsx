import React from 'react';
import { useDispatch } from 'react-redux';
import { clean } from '../action/payroll';
import { logout } from '../actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const handlelogut = () => {
    dispatch(clean());
    dispatch(logout());
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">Calculator</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handlelogut}
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
