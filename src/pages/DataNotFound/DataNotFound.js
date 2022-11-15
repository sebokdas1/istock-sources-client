import React from 'react';
import { Link } from 'react-router-dom';

const DataNotFound = () => {
    return (
        <div>
            <div className="hero lg:min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">404!!</h1>
                        <p className="py-6">Page does not exist or you do not have permission to access this page</p>
                        <button className="btn btn-primary"><Link to='/'>Back To Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataNotFound;