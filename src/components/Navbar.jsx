import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clean } from '../action/payroll';
import { logout } from '../actions/auth';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const handlelogut = () => {
    dispatch(clean());
    dispatch(logout());
  };

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo center">
            <i className="material-icons">developer_board</i>Payroll
          </span>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
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
      <ul id="slide-out" className="sidenav">
        <li style={{ marginLeft: '1rem' }}>
          <button
            onClick={handlelogut}
            className="waves-effect waves-teal btn-flat"
            style={{ marginRight: '2rem' }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
