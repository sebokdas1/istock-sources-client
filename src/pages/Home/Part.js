import React from 'react';
import Loading from '../../Shared/Loading';

const Part = ({ part }) => {

    const { name, img, discription, quantity, price } = part;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Part" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name?.slice(0, 20)}</h2>
                <p>{discription?.slice(0, 35)}</p>

                <div>
                    <p className='text-red-500'>Minimum Order: 1000</p>
                    <p>Available: {quantity}</p>
                </div>
                <p>Price: ${price}<small className='text-lime-600'>(per unit price)</small></p>
                <div class="card-actions">
                    <button class="btn btn-primary text-white">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;