import React from 'react';
import './CustomInput.css';

const CustomInput = ({ label, value, onChange }) => {
  return (
    <div className="custom-input-container">
      <label htmlFor={`${label.toLowerCase()}Input`}>{label}:</label>
      <input
        id={`${label.toLowerCase()}Input`}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
