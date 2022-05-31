import React from "react";
import "./select.scss";
import { Controller, useWatch } from "react-hook-form";
import ReactSelect from "react-select";

const Select = React.forwardRef(
  ({ fieldName, label, control, handleChange, options, isSearchable }, ref) => {
    const value = useWatch({ control, name: fieldName });
    return (
      <div className="select__wrapper">
        <label
          htmlFor={fieldName}
          className={`select__label ${value ? "select__label--active" : null}`}
        >
          {label}
        </label>
        <Controller
          name={fieldName}
          control={control}
          render={({ field }) => (
            <ReactSelect
              {...field}
              ref={ref}
              classNamePrefix="react-select"
              onChange={(value) => {
                field.onChange(value);
                handleChange && handleChange(value);
              }}
              options={options}
              noOptionsMessage={(inputValue) => <>Не найдено</>}
              isSearchable={isSearchable ? isSearchable : false}
            />
          )}
        />
      </div>
    );
  }
);

export default Select;
