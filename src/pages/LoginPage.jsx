import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../actions/auth';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin('12345', 'Einstein'));
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <hr />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">email</i>
              <input id="email" className="materialize-textarea" type="text" />
              <label htmlFor="email">email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="password"
                className="materialize-textarea"
                type="text"
              />
              <label htmlFor="password">password</label>
            </div>
          </div>
          <div
            className="row"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="col">
              <button className="waves-effect waves-light btn" type="submit">
                Send <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
          <hr />
          <div
            className="row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem'
            }}
          >
            <div className="col">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <Link to="/register">Register in the platform</Link>
              </div>
              <GoogleButton onClick={handleGoogleLogin} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
