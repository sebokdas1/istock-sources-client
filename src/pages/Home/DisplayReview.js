import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DisplayReview = ({ review }) => {
    const { ratings, user, description, img } = review;
    console.log(ratings)
    return (
        <div class="card   shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    <ul className='flex'>

                        <li className={ratings < 1 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 2 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 3 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 4 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 5 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>

                    </ul>
                </h2>
                <p className='text-xs'>{description.slice(0, 40)}</p>
                <div class="avatar">
                    <div class="w-8 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
                <h6 className='font-bold'>{user}</h6>

            </div>
        </div>
    );
};

export default DisplayReview;