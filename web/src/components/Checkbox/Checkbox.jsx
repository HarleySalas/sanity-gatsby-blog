import React, { forwardRef } from "react";
import "./checkbox.scss";

const Checkbox = forwardRef((props, ref) => {
  const { checked, disabled, onChange, value } = props;
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          className="checkbox__input"
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <span className="checkbox__checkmark"></span>
      </label>
    </div>
  );
});

export default Checkbox;
