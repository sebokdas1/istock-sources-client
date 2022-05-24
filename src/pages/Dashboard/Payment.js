import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0gJvIQnceSNo7BgQ3yMPfxaCnTGk52gUrBRBiHGrermMxTzKpwBoP8IsNTcrMcsVYvT1hYlCvrQ61OMzVhV0lt0011ffAS8O');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(["order", id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(order)

    return (

        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order?.userName}</p>
                    <h2 class="card-title">Please Pay for {order?.name}</h2>
                    {/* <p>Your order: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p> */}
                    <p>Please pay: ${order?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={order} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;