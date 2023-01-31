import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import OrderModal from './OrderModal';

const PartDetails = () => {
    const [parts, setParts] = useState(null);
    const { id } = useParams();
    const url = `https://istock-sources-server.vercel.app/order/${id}`;
    const { data: part, isLoading, refetch } = useQuery(['order', id], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='lg:px-12'>


            <div className="card lg:card-side bg-base-100 ">
                <figure><img src={part?.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{part?.name}</h2>
                    <p>{part?.discription.slice(0, 180)}</p>
                    <p className='grid grid-cols-2'>
                        < p className='text-red-700' > Minimum order: 100</p >
                        <p>Available: {part?.quantity}</p>
                    </p >
                    <p>price: ${part?.price}<small className='text-lime-600'>(per unit price)</small></p>
                    <div className="card-actions justify-end">


                        <label className="btn btn-primary text-white" htmlFor="booking-modal"
                            onClick={() => setParts(part)}
                        >Place Order</label>

                    </div>
                </div >
            </div >
            {parts && <OrderModal part={parts} refetch={refetch} setParts={setParts}></OrderModal>}
        </div >
    );
};

export default PartDetails;