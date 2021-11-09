import React from 'react';
import { useSelector } from 'react-redux';
import FormAdd from '../components/FormAdd';
import Navbar from '../components/Navbar';

const AppPage = () => {
  const name = useSelector((state) => state.auth.displayName);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center">Hola {name}</h1>
        <hr />
        <FormAdd />
      </div>
    </>
  );
};

export default AppPage;
