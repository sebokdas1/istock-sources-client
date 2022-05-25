import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DisplayReview from './DisplayReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-center text-indigo-500 font-bold text-3xl lg:mt-4 uppercase'>Coustomer REVIEWS</h1>
            <div className='grid lg:grid-cols-4 gap-2'>
                {
                    reviews.map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;