import {Navigate, useLocation} from "react-router-dom"
import PropTypes from "prop-types";

const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem("token")
    let location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default ProtectedRoute;