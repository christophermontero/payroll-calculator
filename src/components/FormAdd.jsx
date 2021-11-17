import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecord } from '../action/payroll';

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);
  const [amountPayment, setAmountPayment] = useState({
    pricePerHour: 0,
    hours: 0
  });

  const { pricePerHour, hours } = amountPayment;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setAmountPayment({
      ...amountPayment,
      [e.target.name]: e.target.value
    });
  };

  const resetInput = () => {
    document.getElementById('payPerHour').value = '';
    document.getElementById('hours').value = '';

    setAmountPayment({
      pricePerHour: 0,
      hours: 0
    });
  };

  const handleCompute = () => {
    const finalAmount = hours * pricePerHour;

    dispatch(createRecord(finalAmount));

    resetInput();
  };

  return (
    <div>
      {!viewForm ? (
        <button
          onClick={handleAdd}
          className="btn-floating waves-effect waves-light green"
        >
          <i className="material-icons">add</i>
        </button>
      ) : (
        <button
          onClick={handleAdd}
          className="btn-floating waves-effect waves-light red"
        >
          <i className="material-icons">close</i>
        </button>
      )}
      {viewForm && (
        <div className="animate__animated animate__fadeIn">
          <input
            id="payPerHour"
            type="number"
            placeholder="Add mount to pay per hour"
            onChange={handleChange}
            name="pricePerHour"
          />
          <input
            id="hours"
            type="number"
            placeholder="Add quantity of hours"
            onChange={handleChange}
            name="hours"
          />
          <button className="btn purple" onClick={handleCompute}>
            <i className="material-icons">save</i>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
