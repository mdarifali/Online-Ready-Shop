import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../firebase/firebaseConfig';
import Loading from '../components/Loading Spinner/Loading';


const RequireAuth = ({ children }) => {
    const auth = getAuth(app)
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (user) {

        return children;
    }

    else {

        return <Navigate to='/login' state={{ form: location }} replace />
    }


};

export default RequireAuth;