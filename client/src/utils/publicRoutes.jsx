// import React from "react";
import { Navigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("token");

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
