import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';

const ManageProduct = () => {
    const [product, setProduct] = useState(null);
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://istock-sources.herokuapp.com/part', {
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
            <h2 className='text-2xl font-bold text-purple-500'>Manage your all Products</h2>
            <div className="overflow-x-auto">
                <table className="table  lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((ap, index) => <tr key={ap._id}>
                                <th>{index + 1}</th>
                                <td>{ap.name?.slice(0, 10)}</td>
                                <td>{ap.quantity}</td>
                                <td>{ap.price}</td>
                                <td className='card-actions'><button className='btn btn-xs bg-red-500 text-white delete-modal'>
                                    <label htmlFor="delete-modal"
                                        onClick={() => setProduct(ap)}
                                    >delete</label>
                                </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {product && <DeleteProductModal product={product} setProduct={setProduct}></DeleteProductModal>}
        </div>
    );
};

export default ManageProduct;