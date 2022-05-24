import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    // const { name, _id, price, orderQuantity } = orders;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        // localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate])
    // console.log(orders[0]._id)

    const handleCancel = (id) => {
        console.log(id)
    }
    return (
        <div>
            <h3>my order page: {orders.length}</h3>
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
                            orders.map((ap, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{ap.name?.slice(0, 10)}</td>
                                <td>{ap.orderQuantity}</td>
                                <td>{ap.price}</td>
                                <td>{!ap?.paid && <button onClick={() => handleCancel(ap._id)} className='btn btn-xs bg-red-500 text-white'>cancel</button>}</td>
                                <td>
                                    {(ap?.price && !ap?.paid) && <Link to={`/dashboard/payment/${ap._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(ap?.price && ap?.paid) && <span className=' text-success'>paid</span>}

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;