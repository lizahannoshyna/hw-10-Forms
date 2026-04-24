import React from 'react';

const ContactItem = ({ name, number, onDelete }) => (
  <li style={{ marginBottom: '10px' }}>
    <span>{name}: {number}</span>
    <button 
      type="button" 
      onClick={onDelete} 
      style={{ marginLeft: '10px' }}
    >
      Delete
    </button>
  </li>
);

export default ContactItem;