import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='uppercase mt-5 text-center text-2xl text-green-400 font-bold'>Products</h2>
            <div className='grid md:grid-cols-3 gap-4 cols-gap-4'>
                {
                    parts?.slice(-6).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;