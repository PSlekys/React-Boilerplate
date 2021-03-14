import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ children }) => (
  <section className="section">
    <div className="container">{children}</div>
  </section>
);

TextInput.propTypes = {
  children: PropTypes.node.isRequired
};

export default TextInput;
