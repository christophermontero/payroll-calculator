import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRecord } from '../action/payroll';

const Element = ({ data }) => {
  const dispatch = useDispatch();

  const { id, date, payment } = data;
  let dateFormat;

  const handleDelete = () => {
    dispatch(removeRecord(id));
  };

  if (date.seconds) {
    dateFormat = date.toDate().toLocaleDateString('es-CO');
  } else {
    dateFormat = date;
  }

  return (
    <>
      <td>{dateFormat}</td>
      <td>{payment}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          Delete
        </button>
      </td>
    </>
  );
};

export default Element;
