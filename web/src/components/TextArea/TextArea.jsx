import React from "react";
import "./text-area.scss";

const TextArea = ({
  fieldName,
  label,
  register,
  errors,
  placeholder,
  isRequired,
  className,
}) => {
  return (
    <div className={`text-area__wrapper ${className ? className : null}`}>
      <label htmlFor={fieldName} className="text-area__label">
        {label}
      </label>
      <textarea
        id={fieldName}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: "This is required",
          },
        })}
        className="text-area"
        placeholder={placeholder}
      />
      {errors && (
        <p className="text-area__errors">
          {errors[fieldName] && errors[fieldName].message}
        </p>
      )}
    </div>
  );
};

export default TextArea;
