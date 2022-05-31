import React from "react";
import Radio from "../Radio/Radio";
import "./radio-group.scss";

const RadioGroup = ({ fieldName, register, options, title }) => {
  return (
    <div className="radio-group">
      <div className="radio-group__title">{title}</div>
      {options &&
        options.map((option, index) => (
          <Radio
            value={option.value}
            label={option.label}
            fieldName={fieldName}
            register={register}
            key={index}
          />
        ))}
    </div>
  );
};

export default RadioGroup;
