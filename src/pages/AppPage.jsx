import React from 'react';
import { useSelector } from 'react-redux';
import Element from '../components/Element';
import FormAdd from '../components/FormAdd';
import Navbar from '../components/Navbar';

const AppPage = () => {
  const name = useSelector((state) => state.auth.displayName);
  const data = useSelector((state) => state.payroll.data);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center animate__animated animate__rubberBand">
          Hello {name.toUpperCase()}
        </h1>
        <hr />
        <FormAdd />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              return (
                <tr
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                  key={ele.id}
                >
                  <Element data={ele} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppPage;
