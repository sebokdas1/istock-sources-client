import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Shared/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 lg:bg-transparent text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>

                    {!admin && <>
                        <li><Link to="/dashboard/my-order">My Order</Link></li>
                        <li><Link to="/dashboard/add-review">Add a Review</Link></li>
                    </>}

                    {admin && <>
                        <li><Link to="/dashboard/manage-order">Manage Orders</Link></li>
                        <li><Link to="/dashboard/add-product">Add Product</Link></li>
                        <li><Link to="/dashboard/manage-product">Manage Products</Link></li>
                        <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;