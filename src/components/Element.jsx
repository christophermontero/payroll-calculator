import React from 'react';

const Element = ({ data }) => {
  const { date, payment } = data;
  const dateFormat = date.toDate().toLocaleDateString('es-CO');

  return (
    <>
      <td>{dateFormat}</td>
      <td>{payment}</td>
      <td>
        <button className="btn red">Delete</button>
      </td>
    </>
  );
};

export default Element;
