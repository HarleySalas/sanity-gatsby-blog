import React from "react";
import { useWatch } from "react-hook-form";
import "./text-input.scss";

const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const TextInput = ({
  fieldName,
  label,
  register,
  control,
  errors,
  placeholder,
  isRequired,
  type,
  className,
  customType,
  width,
  //   maxLength,
  //   minLength,
}) => {
  const value = useWatch({ control, name: fieldName });

  const wrapperClasses = `
    text-input__wrapper
    ${!width ? "text-input__wrapper--full" : null}
    ${width === "1" ? "text-input__wrapper--full" : null}
    ${width === "1/2" ? "text-input__wrapper--half" : null}
    ${className ? className : null}
  `;

  return (
    <div className={wrapperClasses}>
      <label
        htmlFor={fieldName}
        className={`text-input__label ${
          value ? "text-input__label--active" : null
        }`}
      >
        {label}
        {errors[fieldName] && (
          <span className="text-input__errors">
            {" "}
            {errors[fieldName] && errors[fieldName].message}
          </span>
        )}
      </label>
      <input
        id={fieldName}
        className={`text-input`}
        placeholder={placeholder}
        // autoComplete="none"
        autoComplete="new-password"
        onKeyPress={(event) => {
          customType === "phone" &&
            !/[0-9\s-.()+]/.test(event.key) &&
            event.preventDefault();
        }}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: "Required",
          },
          validate: (input) => {
            if (customType === "email" && !isValidEmail(input)) {
              return "Please submit a valid email.";
            }
          },
        })}
        // type={type ? type : "text"}
        // type={(type && type) || (phoneNumber && "tel") || (!type && "text")}
        type={
          (type && type) ||
          (customType === "email" && "email") ||
          (customType === "phone" && "tel") ||
          (!type && "text")
        }
      />
    </div>
  );
};

export default TextInput;
