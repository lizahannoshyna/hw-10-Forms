import React from 'react';
import { MdDelete } from "react-icons/md";

const ContactItem = ({ name, number, onDelete }) => (
  <li style={{ marginBottom: '10px' }}>
    <span>{name}: {number}</span>
    <button 
      type="button" 
      onClick={onDelete} 
      style={{ marginLeft: '10px' }}
    >
      <MdDelete size="20px" />
    </button>
  </li>
);

export default ContactItem;