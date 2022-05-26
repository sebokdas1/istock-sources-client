import React from 'react';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    // const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    // if (!user || !admin) {
    //     signOut(auth);
    //     return <Navigate to="/login" state={{ from: location }} replace />
    // }
    return children
};

export default RequireAdmin;