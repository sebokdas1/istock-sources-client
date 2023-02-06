import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelModal from './CancelModal';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://istock-sources-server.onrender.com/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate])

    // const handlePay = () => {
    //     alert('server is down! please try latter')
    // }


    return (
        <div>
            <h2 className='text-2xl font-bold text-purple-500'>Your Total Order is {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table  lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>cancel</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((ap, index) => <tr key={ap._id}>
                                <th>{index + 1}</th>
                                <td>{ap.name?.slice(0, 10)}</td>
                                <td>{ap.orderQuantity}</td>
                                <td>{ap.price}</td>
                                <td className='card-actions'>{!ap?.paid && <button className='btn btn-xs bg-red-500 text-white cancel-modal'>
                                    <label htmlFor="cancel-modal"
                                        onClick={() => setOrder(ap)}
                                    >cancel</label>
                                </button>}</td>
                                <td>
                                    {(ap.price && !ap.paid) && <Link to={`/dashboard/payment/${ap._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(ap.price && ap.paid) && <div className='tooltip text-white' data-tip={ap.trxId}>
                                        <span className=' text-success'>Paid</span>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {order && <CancelModal order={order} setOrder={setOrder}></CancelModal>}
        </div>
    );
};

export default MyOrder;