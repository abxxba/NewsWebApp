import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  autofocus,
  size,
  disabled
}) => {
  return (
    <span>
      {" "}
      <span>
        <input
          type={type}
          /* prettier-ignore */
          className={classnames("form_input_full", {
      invalid: error
    })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          size={size}
          autofocus={autofocus}
        />
      </span>
      {error && (
        <label generated="true" className="error-label">
          {error}
        </label>
      )}
    </span>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  size: PropTypes.string,
  autofocus: PropTypes.string
};
TextFieldGroup.defaultProps = {
  type: "text"
};
export default TextFieldGroup;
