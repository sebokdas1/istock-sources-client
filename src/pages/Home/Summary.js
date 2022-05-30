import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faListCheck, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className='mt-7 '>
            <h2 className='text-center uppercase font-bold text-green-500 text-3xl'>millions business Trust Us</h2>
            <h4 className='text-center uppercase font-bold text-green-400'>try to understand users expectation</h4>
            <div className='flex justify-center lg:py-12'>
                <div class="lg:stats shadow w-full">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                        </div>
                        <div class="stat-title">Countries</div>
                        <div class="stat-value text-primary">52</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                        </div>
                        <div class="stat-title">Complete Projects</div>
                        <div class="stat-value text-secondary">565+</div>
                        <div class="stat-desc">21+  last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div class="stat-title">Happy Clients</div>
                        <div class="stat-value">356+</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div class="stat-title">Feedbacks</div>
                        <div class="stat-value text-secondary">432+</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;