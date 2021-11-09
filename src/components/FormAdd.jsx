import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecord } from '../types/payroll';

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);
  const [amountPayment, setPayment] = useState({
    hours: 0,
    paymentPerHour: 0
  });

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setPayment(parseFloat(e.target.value) || e.target.value);
  };

  const handleCompute = () => {
    dispatch(createRecord(amountPayment));
  };

  return (
    <div>
      <button onClick={handleAdd} className="btn green">
        Add
      </button>
      {viewForm && (
        <>
          <input
            type="number"
            placeholder="Add quantity of hours"
            value={amountPayment.hours}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Add mount to pay per hour"
            value={amountPayment.paymentPerHour}
            onChange={handleChange}
          />
          <button className="btn purple" onClick={handleCompute}>
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default FormAdd;
