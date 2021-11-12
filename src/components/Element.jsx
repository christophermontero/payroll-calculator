import React from 'react';

const Element = ({ data }) => {
  const { date, payment } = data;
  return (
    <tr>
      <td>{new Date().setTime(date.seconds)}</td>
      <td>{payment}</td>
      <td>
        <button className="btn red">Delete</button>
      </td>
    </tr>
  );
};

export default Element;
