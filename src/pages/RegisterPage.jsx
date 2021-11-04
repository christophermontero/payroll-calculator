import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const { email, username, password, confirmPassword } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log('Value', value);

    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== confirmPassword.trim()) {
        return;
      }
    }
  };

  return (
    <div className="container">
      <h4>Create your account</h4>
      <hr />
      <div className="row">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                id="email"
                className="materialize-textarea"
                type="email"
                name="email"
              />
              <label htmlFor="email">email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                id="username"
                className="materialize-textarea"
                type="text"
                name="username"
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                id="password"
                className="materialize-textarea"
                type="password"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 offset-m3">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={confirmPassword}
                id="confirmPassword"
                className="materialize-textarea"
                type="password"
                name="confirmPassword"
              />
              <label htmlFor="confirmPassword">Confirm password</label>
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
                <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
