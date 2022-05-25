import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const ManageProduct = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    console.log(parts.length)
    return (
        <div>

        </div>
    );
};

export default ManageProduct;