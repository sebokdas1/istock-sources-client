import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DisplayReview from './DisplayReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://istock-sources.herokuapp.com/review').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-12'>
            <h1 className='text-center text-indigo-500 font-bold text-3xl lg:mt-4 uppercase'>Coustomer REVIEWS</h1>
            <div className='flex justify-center lg:py-5'>
                <div className='grid lg:grid-cols-4 gap-2'>
                    {
                        reviews.map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;