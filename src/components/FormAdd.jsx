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

  const handleCompute = () => {
    const finalAmount = hours * pricePerHour;

    dispatch(createRecord(finalAmount));
  };

  return (
    <div>
      <button onClick={handleAdd} className="btn green">
        {!viewForm ? 'Add' : 'Close'}
      </button>
      {viewForm && (
        <>
          <input
            type="number"
            placeholder="Add mount to pay per hour"
            //value={amountPayment.pricePerHour}
            onChange={handleChange}
            name="pricePerHour"
          />
          <input
            type="number"
            placeholder="Add quantity of hours"
            //value={amountPayment.hours}
            onChange={handleChange}
            name="hours"
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
