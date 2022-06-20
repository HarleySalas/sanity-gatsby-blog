import React, { forwardRef } from "react";
import "./checkbox.scss";

const Checkbox = forwardRef((props, ref) => {
  const { checked, disabled, onChange, value, projectStyles } = props;

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          className={`checkbox__input`}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <span
          className={`checkbox__checkmark ${
            projectStyles ? "checkbox__checkmark--project" : null
          }`}
        ></span>
      </label>
    </div>
  );
});

export default Checkbox;
