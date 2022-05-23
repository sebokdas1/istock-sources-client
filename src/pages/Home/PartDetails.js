import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import OrderModal from './OrderModal';

const PartDetails = () => {
    const [parts, setParts] = useState(null);
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: part, isLoading, refetch } = useQuery(['order', id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='lg:px-12'>


            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={part?.img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{part?.name}</h2>
                    <p>{part?.discription.slice(0, 180)}</p>
                    <p className='grid grid-cols-2'>
                        < p className='text-red-700' > Minimum order: 100</p >
                        <p>Available: {part?.quantity}</p>
                    </p >
                    <p>price: ${part?.price}<small className='text-lime-600'>(per unit price)</small></p>
                    <div class="card-actions justify-end">

                        <button class="btn btn-primary text-white booking-modal">
                            <label htmlFor="booking-modal"
                                onClick={() => setParts(part)}
                            >Place Order</label>
                        </button>
                    </div>
                </div >
            </div >
            {parts && <OrderModal part={parts} refetch={refetch}></OrderModal>}
        </div >
    );
};

export default PartDetails;