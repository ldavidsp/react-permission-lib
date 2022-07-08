import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import PermissionContext from "../context/PermissionContext";

/**
 * Check permission for user.
 *
 * @param children
 * @param props
 * @constructor
 */
const Middleware = ({children, ...props}) => {
  const {permission} = props;
  const permissions = useContext(PermissionContext);
  const checkPermission = permissions.find(item => item === permission);

  if (permissions.length > 0 && !checkPermission) {
    return <Navigate to="/403"/>;
  }
  return children;
}

export default Middleware;
