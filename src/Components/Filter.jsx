import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  </div>
);

export default Filter;