import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DisplayReview = ({ review }) => {
    const { ratings, user, description, img } = review;
    return (
        <div className="card   shadow-xl w-full">
            <div className="card-body">
                <h2 className="card-title grid justify-center">
                    <ul className='flex '>

                        <li className={ratings < 1 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 2 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 3 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 4 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>
                        <li className={ratings < 5 ? 'hidden' : 'text-orange-500'} ><FontAwesomeIcon icon={faStar} /></li>

                    </ul>
                </h2>
                <p className='text-xs'>{description.slice(0, 40)}</p>
                <div>
                    <div className="avatar">
                        <div className="w-8 rounded-full text-center">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <h6 className='font-bold'>{user}</h6>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;