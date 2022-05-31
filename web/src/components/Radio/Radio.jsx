import React from "react";
import "./radio.scss";

const Radio = ({ fieldName, label, register, value }) => {
  return (
    <div className="radio__wrapper">
      <input
        {...register(fieldName)}
        id={fieldName}
        type="radio"
        name={fieldName}
        className="radio"
        value={value}
      />
      <label htmlFor={fieldName} className="radio__label">
        <span className="radio__span">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
