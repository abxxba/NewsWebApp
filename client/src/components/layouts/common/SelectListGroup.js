import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,

  value,
  label,
  error,
  info,
  type,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <span>
      {" "}
      <span>
        <select
          /* prettier-ignore */
          className={classnames("form_input_full", {
      invalid: error
    })}
          name={name}
          value={value}
          onChange={onChange}
        >
          {selectOptions}
        </select>
      </span>
      {error && (
        <label generated="true" className="error-label">
          {error}
        </label>
      )}
    </span>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,

  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
