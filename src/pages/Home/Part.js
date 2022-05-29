import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, discription, quantity, price } = part;
    const navigate = useNavigate();
    const navigateOrder = id => {
        navigate(`part/${id}`)
    }

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Part" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name?.slice(0, 20)}</h2>
                <p className='text-base'><span className='text-orange-500 font-bold'>Price: ${price}</span><small className='text-lime-600'>(per unit price)</small></p>


                <div className='grid grid-cols-2 justify-between'>
                    <p className='text-base text-green-600'>Stock: {quantity}</p>
                    <p className='text-red-500 text-base'>Min Order: 100</p>
                </div>
                <p className='text-base text-slate-500'>{discription?.slice(0, 100)}</p>
                <div class="card-actions">
                    <button onClick={() => navigateOrder(_id)} class="btn btn-primary text-white">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;