import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensage }) => (
  <p className="alert alert-danger error">{mensage}</p>
);

Error.propType = {
  mensage: PropTypes.string.isRequired,
};
export default Error;
