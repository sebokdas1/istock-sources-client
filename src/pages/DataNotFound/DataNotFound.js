import React from 'react';
import { Link } from 'react-router-dom';

const DataNotFound = () => {
    return (
        <div>
            <div class="hero lg:min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg" class="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">404!!</h1>
                        <p class="py-6">Page does not exist or you do not have permission to access this page</p>
                        <button class="btn btn-primary"><Link to='/'>Back To Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataNotFound;