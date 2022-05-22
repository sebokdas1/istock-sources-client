import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const PartDetails = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: part, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))
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
                        < p className='text-red-700' > Minimum order: 1000</p >
                        <p>Available: {part?.quantity}</p>
                    </p >
                    <p>price: ${part?.price}<small className='text-lime-600'>(per unit price)</small></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Place Order</button>
                    </div>
                </div >
            </div >

        </div >
    );
};

export default PartDetails;