import React, {useContext} from "react";
import PermissionContext from "../context/PermissionContext";

/**
 * Check permission for user.
 *
 * @param children
 * @param props
 * @constructor
 */
const Can = ({children, ...props}) => {
  const {permission} = props;
  const permissions = useContext(PermissionContext);
  const checkPermission = permissions.find(item => item === permission);
  return checkPermission ? children : <></>;
}

export default Can;


