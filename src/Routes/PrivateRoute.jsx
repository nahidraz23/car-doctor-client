import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="w-full text-center">
            <progress className="progress progress-info w-80 p-5"></progress>
        </div>;
    }

    if(user?.email){
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

export default PrivateRoute;