import React from 'react';

const Element = ({ data }) => {
  const { date, payment } = data;
  let dateFormat;

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
        <button className="btn red">Delete</button>
      </td>
    </>
  );
};

export default Element;
