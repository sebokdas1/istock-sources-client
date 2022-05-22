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
        <div className='grid md:grid-cols-3 gap-4 cols-gap-4'>
            {
                parts?.slice(0, 6).map(part => <Part
                    key={part._id}
                    part={part}
                ></Part>)
            }
        </div>
    );
};

export default Parts;