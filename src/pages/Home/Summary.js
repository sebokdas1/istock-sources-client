import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faListCheck, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className='mt-7 '>
            <h2 className='text-center uppercase font-bold text-green-500 text-3xl'>millions business Trust Us</h2>
            <h4 className='text-center uppercase font-bold text-green-400'>try to understand users expectation</h4>
            <div className='flex justify-center lg:py-12'>
                <div className="lg:stats shadow w-full">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                        </div>
                        <div className="stat-title">Countries</div>
                        <div className="stat-value text-primary">52</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                        </div>
                        <div className="stat-title">Complete Projects</div>
                        <div className="stat-value text-secondary">565+</div>
                        <div className="stat-desc">21+  last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value">356+</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="stat-title">Feedbacks</div>
                        <div className="stat-value text-secondary">432+</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;