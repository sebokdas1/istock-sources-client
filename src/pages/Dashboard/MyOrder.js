import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelModal from './CancelModal';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState(null);
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
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate])

    const handlePay = () => {
        alert('server is down! please try latter')
    }


    return (
        <div>
            <h3>my total order: {orders.length}</h3>
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
                                    {(ap.price && !ap.paid) && <button onClick={handlePay} className='btn btn-xs btn-success'>pay</button>}
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