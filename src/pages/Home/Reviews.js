import React from 'react';
import { useQuery } from 'react-query';
import './Reviews.css'
import Loading from '../../Shared/Loading';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import DisplayReview from './DisplayReview';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://istock-sources.herokuapp.com/review').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (

        <div className='mt-12 mb-12'>
            <>
                <h1 className='text-center text-indigo-500 font-bold text-3xl lg:mt-4 uppercase'>Coustomer REVIEWS</h1>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {reviews?.map((review) => (
                        <SwiperSlide key={review._id}>
                            <DisplayReview review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Reviews;