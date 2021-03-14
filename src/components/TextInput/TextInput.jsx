import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, type, label, placeholder, handleChange }) => (
  <div className="field">
    {label && (
      <label className="label" htmlFor={name}>
        {label}
      </label>
    )}
    <div className="control">
      <input
        className="input"
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  </div>
);

const inputTypes = ['text', 'number', 'email', 'password'];

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(inputTypes),
  handleChange: PropTypes.func
};

TextInput.defaultProps = {
  type: 'text',
  label: '',
  handleChange: () => null
};

export default TextInput;
