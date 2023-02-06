import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageAllOrder = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('https://istock-sources-server.onrender.com/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-purple-500'>Manage Your All Orders</h2>
            <div className='overflow-x-auto'>


                <table className="table lg:w-full">
                    <thead>
                        <tr>
                            <th>Parts</th>
                            <th>User</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrder key={index} order={order} />)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;